import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const assignLeaderToGroups = async (req: Request, res: Response): Promise<void> => {
  const { userId, groupIds } = req.body;

  try {
    console.log("📌 Assigning leader to groups:", { userId, groupIds });

    if (!userId || !groupIds || !Array.isArray(groupIds) || groupIds.length === 0) {
      res.status(400).json({ message: "Invalid data provided." });
      return;
    }


    const assignedGroups = await prisma.leadersGroup.createMany({
      data: groupIds.map((groupId: number) => ({
        userId,
        groupId,
      })),
    });

    console.log("✅ Successfully assigned groups:", assignedGroups);
    res.status(201).json({ message: "Leader assigned to groups successfully!" });
  } catch (error) {
    console.error("❌ Failed to assign leader to groups:", error);
    res.status(500).json({ message: "Error assigning leader to groups." });
  }
};
