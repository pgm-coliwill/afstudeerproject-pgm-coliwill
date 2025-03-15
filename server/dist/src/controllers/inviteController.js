"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteUsers = void 0;
const client_1 = require("@prisma/client");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const crypto_1 = __importDefault(require("crypto"));
const prisma = new client_1.PrismaClient();
aws_sdk_1.default.config.update({
    region: "eu-central-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const ses = new aws_sdk_1.default.SES({ apiVersion: "2010-12-01" });
const inviteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emails, role, youthMovementId } = req.body;
        console.log("📌 Received Request Data:", { emails, role, youthMovementId });
        if (!emails || !role || !youthMovementId) {
            console.error("❌ Missing required fields.");
            res.status(400).json({ message: "Missing required fields." });
            return;
        }
        // ✅ Check if youthMovementId exists in DB
        const youthMovement = yield prisma.youthMovement.findUnique({
            where: { id: youthMovementId },
        });
        if (!youthMovement) {
            console.error("❌ Invalid youthMovementId:", youthMovementId);
            res.status(400).json({ message: "Invalid youth movement ID." });
            return;
        }
        // ✅ Create Invitations & Send Emails
        const invitations = yield Promise.all(emails.map((email) => __awaiter(void 0, void 0, void 0, function* () {
            const inviteCode = crypto_1.default.randomBytes(6).toString("hex"); // Generate unique code
            const invitation = yield prisma.invitation.create({
                data: {
                    email,
                    role,
                    youthMovementId,
                    code: inviteCode,
                    sentAt: new Date(),
                    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 7 days
                },
            });
            // ✅ Send email via AWS SES
            yield sendEmail(email, inviteCode, youthMovement.name, role);
            return invitation;
        })));
        console.log("✅ Invitations Created & Emails Sent:", invitations);
        res.status(200).json({ message: "Invitations sent successfully!", invitations });
    }
    catch (error) {
        console.error("❌ Failed to send invitations:", error);
        res.status(500).json({ message: "Error sending invitations." });
    }
});
exports.inviteUsers = inviteUsers;
// ✅ Function to Send Email via AWS SES
const sendEmail = (toEmail, inviteCode, youthMovementName, role) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = `Uitnodiging voor ${youthMovementName}`;
    const body = `
    Je bent uitgenodigd om je aan te sluiten bij ${youthMovementName} als ${role}.
    Gebruik deze code om je te registreren: ${inviteCode}
    De code vervalt over 7 dagen.
    
    Registreer nu: http://localhost:3000/signup?code=${inviteCode}
  `;
    const params = {
        Source: "cwillems1903@gmail.com", // ✅ Must be verified in AWS SES
        Destination: { ToAddresses: [toEmail] },
        Message: {
            Subject: { Data: subject },
            Body: {
                Text: { Data: body },
            },
        },
    };
    try {
        yield ses.sendEmail(params).promise();
        console.log(`✅ Email sent to ${toEmail}`);
    }
    catch (error) {
        console.error(`❌ Failed to send email to ${toEmail}:`, error);
    }
});
