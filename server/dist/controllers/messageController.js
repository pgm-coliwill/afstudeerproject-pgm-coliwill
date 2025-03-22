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
exports.getMessagesBetweenUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getMessagesBetweenUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user1Id, user2Id } = req.params;
    try {
        const messages = yield prisma.message.findMany({
            where: {
                OR: [
                    { senderId: Number(user1Id), receiverId: Number(user2Id) },
                    { senderId: Number(user2Id), receiverId: Number(user1Id) },
                ],
            },
            include: {
                sender: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
            },
            orderBy: { sentAt: "asc" },
        });
        res.status(200).json(messages);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});
exports.getMessagesBetweenUsers = getMessagesBetweenUsers;
