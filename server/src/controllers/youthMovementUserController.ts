// controllers/youthMovementUserController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsersByYouthMovement = async (req: Request, res: Response) => {
  const { youthMovementId } = req.params;

  try {
    const users = await prisma.youthMovementUser.findMany({
      where: { youthMovementId: Number(youthMovementId) },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users by youthMovementId:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
