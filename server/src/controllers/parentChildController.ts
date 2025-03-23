import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createParentChild = async (req: Request, res: Response): Promise<void> => {
  try {
    const parentChildrenData = req.body;

    if (!Array.isArray(parentChildrenData) || parentChildrenData.length === 0) {
      res.status(400).json({ message: "Invalid request data. Expecting an array of children." });
      return;
    }

    console.log("📌 Received Parent-Child Data:", parentChildrenData);

 
    const createdEntries = await prisma.parentChild.createMany({
      data: parentChildrenData.map((child) => ({
        parentId: child.parentId,
        childName: child.childName,
        groupId: child.groupId,
        relation: child.relation,
      })),
    });

    console.log("✅ Parent-Child Records Created:", createdEntries);
    res.status(201).json({ message: "Children registered successfully!", createdEntries });

  } catch (error) {
    console.error("Failed to register children:", error);
    res.status(500).json({ message: "Error registering children." });
  }
};
