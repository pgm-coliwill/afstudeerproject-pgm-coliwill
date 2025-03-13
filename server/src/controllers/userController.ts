import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { cognitoId } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        cognitoId,
      },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error("failed to get user", error);
    res.status(500).json({ message: "Failed to get user" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { cognitoId, email, firstName, lastName } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        cognitoId,
        email,
        firstName,
        lastName,
      },
    });
    res.json(user);
  } catch (error) {
    console.error("failed to create user", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};
