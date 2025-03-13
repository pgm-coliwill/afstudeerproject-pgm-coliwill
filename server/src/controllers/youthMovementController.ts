import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createYouthMovement = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description,city,postalCode,street,houseNumber } = req.body;
  try {
    const youthMovement = await prisma.youthMovement.create({
      data: {
        name,
        description,
        city,
        postalCode,
        street,
        houseNumber
      },
    });
    res.json(youthMovement);
  } catch (error) {
    console.error("failed to create youth movement", error);
    res.status(500).json({ message: "Failed to create youth movement" });
  }
}
