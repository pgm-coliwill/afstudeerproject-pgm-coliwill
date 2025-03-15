import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createYouthMovement = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("📌 Received Youth Movement Data:", req.body); // ✅ Debug input

    const { name, description, city, postalCode, street, houseNumber, adminId } = req.body;

    // ✅ Log missing fields
    if (!name || !city || !postalCode || !street || !houseNumber || !adminId) {
      console.error("❌ Missing fields:", { name, city, postalCode, street, houseNumber, adminId });
      res.status(400).json({ message: "Missing required fields." });
      return;
    }

    const youthMovement = await prisma.youthMovement.create({
      data: {
        name,
        description,
        city,
        postalCode,
        street,
        houseNumber,
        admin : {
          connect: {
            id: adminId,
          },
        },
      },
    });

    console.log("✅ Youth Movement Created:", youthMovement);
    res.status(201).json(youthMovement);
  } catch (error) {
    console.error("❌ Failed to create youth movement:", error);
    res.status(500).json({ message: "Error creating youth movement." });
  }
};
