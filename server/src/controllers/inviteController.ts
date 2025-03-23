import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import AWS from "aws-sdk";
import crypto from "crypto";

const prisma = new PrismaClient();


AWS.config.update({
  region: "eu-central-1", 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export const inviteUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { emails, role, youthMovementId } = req.body;

    console.log("📌 Received Request Data:", { emails, role, youthMovementId });

    if (!emails || !role || !youthMovementId) {
      console.error("Missing required fields.");
      res.status(400).json({ message: "Missing required fields." });
      return;
    }

    
    const youthMovement = await prisma.youthMovement.findUnique({
      where: { id: youthMovementId },
    });

    if (!youthMovement) {
      console.error("Invalid youthMovementId:", youthMovementId);
      res.status(400).json({ message: "Invalid youth movement ID." });
      return;
    }

   
    const invitations = await Promise.all(
      emails.map(async (email: string) => {
        const inviteCode = crypto.randomBytes(6).toString("hex"); 

        const invitation = await prisma.invitation.create({
          data: {
            email,
            role,
            youthMovementId,
            code: inviteCode,
            sentAt: new Date(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
          },
        });

        
        await sendEmail(email, inviteCode, youthMovement.name, role);

        return invitation;
      })
    );

    console.log("✅ Invitations Created & Emails Sent:", invitations);
    res.status(200).json({ message: "Invitations sent successfully!", invitations });
  } catch (error) {
    console.error("❌ Failed to send invitations:", error);
    res.status(500).json({ message: "Error sending invitations." });
  }
};


const sendEmail = async (toEmail: string, inviteCode: string, youthMovementName: string, role: string) => {
  const subject = `Uitnodiging voor ${youthMovementName}`;
  const body = `
    Je bent uitgenodigd om je aan te sluiten bij ${youthMovementName} als ${role}.
    Gebruik deze code om je te registreren: ${inviteCode}
    De code vervalt over 7 dagen.
  `;

  const params = {
    Source: "cwillems1903@gmail.com", 
    Destination: { ToAddresses: [toEmail] },
    Message: {
      Subject: { Data: subject },
      Body: {
        Text: { Data: body },
      },
    },
  };

  try {
    await ses.sendEmail(params).promise();
    console.log(`✅ Email sent to ${toEmail}`);
  } catch (error) {
    console.error(`Failed to send email to ${toEmail}:`, error);
  }
};

export const getInviteCode = async (req: Request, res: Response): Promise<void> => {
  const { code } = req.params;

  try {
    console.log("📌 Fetching Invitation for Code:", code);

    const invitation = await prisma.invitation.findUnique({
      where: { code },
    });

    if (!invitation) {
      res.status(404).json({ message: "Invitation not found." });
      return;
    }

    res.json(invitation);
  } catch (error) {
    console.error("Failed to fetch invitation:", error);
    res.status(500).json({ message: "Error fetching invitation." });
  }
};