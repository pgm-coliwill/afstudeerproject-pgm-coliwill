import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groups } = req.body;

    const createdGroups = await prisma.group.createMany({
      data: groups,
    });

    res.status(201).json(createdGroups);
  } catch (error) {
    console.error("❌ Failed to create groups:", error);
    res.status(500).json({ message: "Error creating groups." });
  }
};

export const getGroupsFromYouthMovement = async (req: Request, res: Response): Promise<void> => {
  const { youthMovementId } = req.params;

  try {
    
    const youthMovementIdNumber = parseInt(youthMovementId, 10);

    if (isNaN(youthMovementIdNumber)) {
      console.error("❌ Invalid youthMovementId:", youthMovementId);
      res.status(400).json({ message: "Invalid youth movement ID." });
      return;
    }

    
    const groups = await prisma.group.findMany({
      where: {
        youthMovementId: youthMovementIdNumber, // Use converted number
      },
    });

    console.log(`✅ Groups fetched for Youth Movement ID ${youthMovementIdNumber}:`, groups);

    res.json(groups);
  } catch (error) {
    console.error("❌ Failed to get groups:", error);
    res.status(500).json({ message: "Error getting groups." });
  }
};