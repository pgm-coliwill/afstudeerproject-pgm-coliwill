import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import AWS from "aws-sdk";
import crypto from "crypto";

const prisma = new PrismaClient();

// Configure AWS SES
AWS.config.update({
  region: "us-east-1", 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export const inviteUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { emails, role, youthMovementId } = req.body;

    if (!emails || !role || !youthMovementId) {
      res.status(400).json({ message: "Missing required fields." });
      return;
    }

    const invitations = await Promise.all(
      emails.map(async (email: string) => {
        const inviteCode = crypto.randomBytes(6).toString("hex"); // Generate unique code

        // Store the invitation in the database
        const invitation = await prisma.invitation.create({
          data: {
            email,
            role,
            youthMovementId,
            code: inviteCode,
            sentAt: new Date(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 7 days
          },
        });

        // Send email via AWS SES
        const emailParams = {
          Source: process.env.SES_SENDER_EMAIL || "", // Must be verified in AWS SES
          Destination: { ToAddresses: [email] },
          Message: {
            Subject: { Data: "You're Invited to Join the Platform" },
            Body: {
              Text: {
                Data: `You have been invited to join as a ${role}. Use this code to sign up: ${inviteCode}`,
              },
            },
          },
        };

        await ses.sendEmail(emailParams).promise();

        return invitation;
      })
    );

    res.status(200).json({ message: "Invitations sent successfully!", invitations });
  } catch (error) {
    console.error("❌ Failed to send invitations:", error);
    res.status(500).json({ message: "Error sending invitations." });
  }
};
