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
exports.updateUser = exports.createUser = exports.createAdmin = exports.getUser = void 0;
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
        const youthMovement = user.youthMovements.length > 0 ? user.youthMovements[0].youthMovement : null;
        const userProfile = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            cognitoId: user.cognitoId,
            email: user.email,
            role: user.youthMovements.length > 0 ? user.youthMovements[0].role : "user",
            youthMovementId: (youthMovement === null || youthMovement === void 0 ? void 0 : youthMovement.id) || null,
            youthMovementName: (youthMovement === null || youthMovement === void 0 ? void 0 : youthMovement.name) || null,
        };
        console.log("✅ User Found:", userProfile);
        res.json(userProfile);
    }
    catch (error) {
        console.error("Failed to get user:", error);
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
        const invitation = yield prisma.invitation.findUnique({
            where: { code },
        });
        if (!invitation) {
            console.error("Invalid invitation code:", code);
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
        const youthMovement = yield prisma.youthMovement.findUnique({
            where: { id: youthMovementId },
        });
        if (!youthMovement) {
            console.error("Youth Movement not found:", youthMovementId);
            res.status(400).json({ message: "Invalid youth movement ID." });
            return;
        }
        yield prisma.youthMovementUser.create({
            data: {
                userId: user.id,
                youthMovementId: youthMovementId,
                role: invitation.role,
            },
        });
        console.log(`✅ User linked to Youth Movement as ${invitation.role}:`, youthMovementId);
        yield prisma.invitation.update({
            where: { id: invitation.id },
            data: { used: true },
        });
        console.log("Invitation marked as used:", invitation.id);
        res.json(user);
    }
    catch (error) {
        console.error("Failed to create user:", error);
        res.status(500).json({ message: "Failed to create user" });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const { firstName, lastName } = req.body;
    try {
        const updatedUser = yield prisma.user.update({
            where: { id: userId },
            data: {
                firstName,
                lastName,
            },
        });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Failed to update user." });
    }
});
exports.updateUser = updateUser;
