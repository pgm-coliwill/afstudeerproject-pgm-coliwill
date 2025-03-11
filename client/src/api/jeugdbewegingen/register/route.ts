import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, description, city, postalCode, street, houseNumber } = await req.json();

    // Create jeugdbeweging in the database
    const newJeugdbeweging = await prisma.jeugdbeweging.create({
      data: {
        name,
        description,
        city,
        postalCode,
        street,
        houseNumber,
      },
    });

    return NextResponse.json(newJeugdbeweging, { status: 201 });
  } catch (error) {
    console.error("Error registering jeugdbeweging:", error);
    return NextResponse.json({ error: "Fout bij registratie" }, { status: 500 });
  }
}
