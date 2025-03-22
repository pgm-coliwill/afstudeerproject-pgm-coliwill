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
exports.getGroupsFromYouthMovement = exports.createGroups = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { groups } = req.body;
        const createdGroups = yield prisma.group.createMany({
            data: groups,
        });
        res.status(201).json(createdGroups);
    }
    catch (error) {
        console.error("❌ Failed to create groups:", error);
        res.status(500).json({ message: "Error creating groups." });
    }
});
exports.createGroups = createGroups;
const getGroupsFromYouthMovement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { youthMovementId } = req.params;
    console.log("📌 Received request to fetch groups for Youth Movement ID:", youthMovementId); // Debugging log
    try {
        const groups = yield prisma.group.findMany({
            where: {
                youthMovementId: Number(youthMovementId),
            },
        });
        console.log("✅ Groups found:", groups); // Debugging log
        if (!groups.length) {
            console.warn("⚠️ No groups found for Youth Movement ID:", youthMovementId);
            res.status(404).json({ message: "No groups found." });
            return;
        }
        res.json(groups);
    }
    catch (error) {
        console.error("❌ Failed to get groups:", error);
        res.status(500).json({ message: "Error getting groups." });
    }
});
exports.getGroupsFromYouthMovement = getGroupsFromYouthMovement;
