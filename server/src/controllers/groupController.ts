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
