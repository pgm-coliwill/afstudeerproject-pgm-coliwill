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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.createAdmin = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cognitoId } = req.params;
    try {
        console.log("📌 Fetching user with Cognito ID:", cognitoId);
        const user = yield prisma.user.findUnique({
            where: { cognitoId },
            include: {
                youthMovements: {
                    select: {
                        id: true,
                        role: true,
                        youthMovement: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            console.error("❌ User not found for Cognito ID:", cognitoId);
            res.status(404).json({ message: "User not found" });
            return;
        }
        // Extract youth movement details if available
        const youthMovement = user.youthMovements.length > 0 ? user.youthMovements[0].youthMovement : null;
        const userProfile = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            cognitoId: user.cognitoId,
            email: user.email,
            role: user.youthMovements.length > 0 ? user.youthMovements[0].role : "user", // Default to "user" if no role found
            youthMovementId: (youthMovement === null || youthMovement === void 0 ? void 0 : youthMovement.id) || null,
            youthMovementName: (youthMovement === null || youthMovement === void 0 ? void 0 : youthMovement.name) || null,
        };
        console.log("✅ User Found:", userProfile);
        res.json(userProfile);
    }
    catch (error) {
        console.error("❌ Failed to get user:", error);
        res.status(500).json({ message: "Failed to get user" });
    }
});
exports.getUser = getUser;
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cognitoId, email, firstName, lastName } = req.body;
    try {
        const user = yield prisma.user.create({
            data: {
                cognitoId,
                email,
                firstName,
                lastName,
            },
        });
        res.json(user);
    }
    catch (error) {
        console.error("failed to create user", error);
        res.status(500).json({ message: "Failed to create user" });
    }
});
exports.createAdmin = createAdmin;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cognitoId, email, firstName, lastName, youthMovementId, code } = req.body;
    try {
        console.log("📌 Creating user with data:", req.body);
        // ✅ Step 1: Fetch the Invitation to get the correct role
        const invitation = yield prisma.invitation.findUnique({
            where: { code },
        });
        if (!invitation) {
            console.error("❌ Invalid invitation code:", code);
            res.status(400).json({ message: "Invalid invitation code." });
            return;
        }
        console.log("✅ Invitation found:", invitation);
        // ✅ Step 2: Create the User
        const user = yield prisma.user.create({
            data: {
                cognitoId,
                email,
                firstName,
                lastName,
            },
        });
        console.log("✅ User created:", user);
        // ✅ Step 3: Check if the youth movement exists
        const youthMovement = yield prisma.youthMovement.findUnique({
            where: { id: youthMovementId },
        });
        if (!youthMovement) {
            console.error("❌ Youth Movement not found:", youthMovementId);
            res.status(400).json({ message: "Invalid youth movement ID." });
            return;
        }
        // ✅ Step 4: Create an entry in YouthMovementUser to link user with the correct role
        yield prisma.youthMovementUser.create({
            data: {
                userId: user.id,
                youthMovementId: youthMovementId,
                role: invitation.role, // ✅ Dynamically assign role from invitation
            },
        });
        console.log(`✅ User linked to Youth Movement as ${invitation.role}:`, youthMovementId);
        // ✅ Step 5: Mark the invitation as "used" so it can't be reused
        yield prisma.invitation.update({
            where: { id: invitation.id },
            data: { used: true },
        });
        console.log("✅ Invitation marked as used:", invitation.id);
        res.json(user);
    }
    catch (error) {
        console.error("❌ Failed to create user:", error);
        res.status(500).json({ message: "Failed to create user" });
    }
});
exports.createUser = createUser;
