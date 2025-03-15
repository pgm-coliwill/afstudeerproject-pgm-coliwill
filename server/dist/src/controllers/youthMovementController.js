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
        console.log("📌 Received Youth Movement Data:", req.body); // ✅ Debug input
        const { name, description, city, postalCode, street, houseNumber, adminId } = req.body;
        // ✅ Log missing fields
        if (!name || !city || !postalCode || !street || !houseNumber || !adminId) {
            console.error("❌ Missing fields:", { name, city, postalCode, street, houseNumber, adminId });
            res.status(400).json({ message: "Missing required fields." });
            return;
        }
        const youthMovement = yield prisma.youthMovement.create({
            data: {
                name,
                description,
                city,
                postalCode,
                street,
                houseNumber,
                admin: {
                    connect: {
                        id: adminId,
                    },
                },
            },
        });
        console.log("✅ Youth Movement Created:", youthMovement);
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
