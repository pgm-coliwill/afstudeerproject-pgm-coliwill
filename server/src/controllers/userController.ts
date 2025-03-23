import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { cognitoId } = req.params;

  try {
    console.log("📌 Fetching user with Cognito ID:", cognitoId);

    const user = await prisma.user.findUnique({
      where: { cognitoId },
      include: {
        youthMovements: {
          select: {
            id: true,
            role: true,
            youthMovement: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      console.error("❌ User not found for Cognito ID:", cognitoId);
      res.status(404).json({ message: "User not found" });
      return;
    }

  
    const youthMovement = user.youthMovements.length > 0 ? user.youthMovements[0].youthMovement : null;

    const userProfile = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      cognitoId: user.cognitoId,
      email: user.email,
      role: user.youthMovements.length > 0 ? user.youthMovements[0].role : "user", 
      youthMovementId: youthMovement?.id || null,
      youthMovementName: youthMovement?.name || null,
    };

    console.log("✅ User Found:", userProfile);

    res.json(userProfile);
  } catch (error) {
    console.error("Failed to get user:", error);
    res.status(500).json({ message: "Failed to get user" });
  }
};

export const createAdmin = async (
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





export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { cognitoId, email, firstName, lastName, youthMovementId, code } = req.body;

  try {
    console.log("📌 Creating user with data:", req.body);


    const invitation = await prisma.invitation.findUnique({
      where: { code },
    });

    if (!invitation) {
      console.error("Invalid invitation code:", code);
      res.status(400).json({ message: "Invalid invitation code." });
      return;
    }

    console.log("✅ Invitation found:", invitation);

    // ✅ Step 2: Create the User
    const user = await prisma.user.create({
      data: {
        cognitoId,
        email,
        firstName,
        lastName,
      },
    });

    console.log("✅ User created:", user);

    
    const youthMovement = await prisma.youthMovement.findUnique({
      where: { id: youthMovementId },
    });

    if (!youthMovement) {
      console.error("Youth Movement not found:", youthMovementId);
      res.status(400).json({ message: "Invalid youth movement ID." });
      return;
    }

    
    await prisma.youthMovementUser.create({
      data: {
        userId: user.id,
        youthMovementId: youthMovementId,
        role: invitation.role, 
      },
    });

    console.log(`✅ User linked to Youth Movement as ${invitation.role}:`, youthMovementId);

   
    await prisma.invitation.update({
      where: { id: invitation.id },
      data: { used: true },
    });

    console.log("Invitation marked as used:", invitation.id);

    res.json(user);
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const { firstName, lastName} = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user." });
  }
};