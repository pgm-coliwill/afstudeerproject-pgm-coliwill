import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createYouthMovement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, city, postalCode, street, houseNumber, adminId } = req.body;

    console.log("📌 Creating Youth Movement:", { name, city, adminId });

    if (!adminId) {
      res.status(400).json({ message: "Admin ID is required." });
      return;
    }

    // ✅ Create the Youth Movement
    const youthMovement = await prisma.youthMovement.create({
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

   
    await prisma.youthMovementUser.create({
      data: {
        userId: adminId, 
        youthMovementId: youthMovement.id,
        role: "leider", 
      },
    });

    console.log("✅ Admin assigned as leader");

    res.status(201).json(youthMovement);
  } catch (error) {
    console.error("❌ Failed to create youth movement:", error);
    res.status(500).json({ message: "Error creating youth movement." });
  }
};

export const getYouthMovementByUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    console.log("📌 Fetching Youth Movement for User ID:", userId);

    const youthMovement = await prisma.youthMovement.findFirst({
      where: { adminId: Number(userId) },
    });

    if (!youthMovement) {
      res.status(404).json({ message: "No youth movement found for this user." });
      return;
    }

    res.json(youthMovement);
  } catch (error) {
    console.error("❌ Failed to fetch youth movement:", error);
    res.status(500).json({ message: "Error fetching youth movement." });
  }
};
