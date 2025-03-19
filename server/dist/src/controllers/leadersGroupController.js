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
exports.assignLeaderToGroups = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const assignLeaderToGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, groupIds } = req.body;
    try {
        console.log("📌 Assigning leader to groups:", { userId, groupIds });
        if (!userId || !groupIds || !Array.isArray(groupIds) || groupIds.length === 0) {
            res.status(400).json({ message: "Invalid data provided." });
            return;
        }
        const assignedGroups = yield prisma.leadersGroup.createMany({
            data: groupIds.map((groupId) => ({
                userId,
                groupId,
            })),
        });
        console.log("✅ Successfully assigned groups:", assignedGroups);
        res.status(201).json({ message: "Leader assigned to groups successfully!" });
    }
    catch (error) {
        console.error("❌ Failed to assign leader to groups:", error);
        res.status(500).json({ message: "Error assigning leader to groups." });
    }
});
exports.assignLeaderToGroups = assignLeaderToGroups;
