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
exports.getYouthMovementByUser = exports.createYouthMovement = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createYouthMovement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, city, postalCode, street, houseNumber, adminId } = req.body;
        console.log("📌 Creating Youth Movement:", { name, city, adminId });
        if (!adminId) {
            res.status(400).json({ message: "Admin ID is required." });
            return;
        }
        // ✅ Create the Youth Movement
        const youthMovement = yield prisma.youthMovement.create({
            data: {
                name,
                description,
                city,
                postalCode,
                street,
                houseNumber,
                adminId,
            },
        });
        console.log("✅ Youth Movement Created:", youthMovement);
        yield prisma.youthMovementUser.create({
            data: {
                userId: adminId,
                youthMovementId: youthMovement.id,
                role: "leider",
            },
        });
        console.log("✅ Admin assigned as leader");
        res.status(201).json(youthMovement);
    }
    catch (error) {
        console.error("❌ Failed to create youth movement:", error);
        res.status(500).json({ message: "Error creating youth movement." });
    }
});
exports.createYouthMovement = createYouthMovement;
const getYouthMovementByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        console.log("📌 Fetching Youth Movement for User ID:", userId);
        const youthMovement = yield prisma.youthMovement.findFirst({
            where: { adminId: Number(userId) },
        });
        if (!youthMovement) {
            res.status(404).json({ message: "No youth movement found for this user." });
            return;
        }
        res.json(youthMovement);
    }
    catch (error) {
        console.error("❌ Failed to fetch youth movement:", error);
        res.status(500).json({ message: "Error fetching youth movement." });
    }
});
exports.getYouthMovementByUser = getYouthMovementByUser;
