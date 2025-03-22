// src/controllers/messageController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMessagesBetweenUsers = async (req: Request, res: Response) => {
  const { user1Id, user2Id } = req.params;

  try {
    const messages = await prisma.message.findMany({
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
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
