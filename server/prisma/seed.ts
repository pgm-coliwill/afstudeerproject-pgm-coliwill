import { PrismaClient, Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function resetSequence(modelName: string) {
  const quotedModelName = `"${modelName}"`;

  const maxIdResult = await prisma.$queryRaw<
    { max_id: number }[]
  >`SELECT MAX(id) AS max_id FROM ${Prisma.raw(quotedModelName)}`;

  if (!maxIdResult[0]?.max_id) return;

  const nextId = maxIdResult[0].max_id + 1;
  await prisma.$executeRaw(
    Prisma.raw(`
      SELECT setval(pg_get_serial_sequence('${quotedModelName}', 'id'), ${nextId}, false)
    `)
  );
  console.log(`✅ Reset sequence for ${modelName} to ${nextId}`);
}

async function deleteAllData() {
  await prisma.parentChild.deleteMany();
  await prisma.leadersGroup.deleteMany();
  await prisma.attendee.deleteMany();
  await prisma.volunteer.deleteMany();
  await prisma.event.deleteMany();
  await prisma.postLike.deleteMany();
  await prisma.post.deleteMany();
  await prisma.group.deleteMany();
  await prisma.invitation.deleteMany();
  await prisma.jeugdbewegingUser.deleteMany();
  await prisma.user.deleteMany();
  await prisma.jeugdbeweging.deleteMany();
  console.log("🗑 All existing data cleared.");
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  // Delete all existing data
  await deleteAllData();

  // Load JSON data for each model
  const jeugdbewegingen = JSON.parse(fs.readFileSync(path.join(dataDirectory, "jeugdbewegingen.json"), "utf-8"));
  const users = JSON.parse(fs.readFileSync(path.join(dataDirectory, "users.json"), "utf-8"));
  const jeugdbewegingUser = JSON.parse(fs.readFileSync(path.join(dataDirectory, "jeugdbewegingUser.json"), "utf-8"));
  const invitations = JSON.parse(fs.readFileSync(path.join(dataDirectory, "invitations.json"), "utf-8"));
  const groups = JSON.parse(fs.readFileSync(path.join(dataDirectory, "groups.json"), "utf-8"));
  const posts = JSON.parse(fs.readFileSync(path.join(dataDirectory, "posts.json"), "utf-8"));
  const postLikes = JSON.parse(fs.readFileSync(path.join(dataDirectory, "postLikes.json"), "utf-8"));
  const events = JSON.parse(fs.readFileSync(path.join(dataDirectory, "events.json"), "utf-8"));
  const volunteers = JSON.parse(fs.readFileSync(path.join(dataDirectory, "volunteers.json"), "utf-8"));
  const attendees = JSON.parse(fs.readFileSync(path.join(dataDirectory, "attendees.json"), "utf-8"));
  const leadersGroups = JSON.parse(fs.readFileSync(path.join(dataDirectory, "leadersGroups.json"), "utf-8"));
  const parentChild = JSON.parse(fs.readFileSync(path.join(dataDirectory, "parentChild.json"), "utf-8"));
  const messages = JSON.parse(fs.readFileSync(path.join(dataDirectory, "messages.json"), "utf-8"));

  // Seed each model in the correct order
  await prisma.jeugdbeweging.createMany({ data: jeugdbewegingen });
  await prisma.user.createMany({ data: users });

  // Handle foreign key constraints
  for (const item of jeugdbewegingUser) {
    const userExists = await prisma.user.findUnique({ where: { id: item.userId } });
    const jeugdExists = await prisma.jeugdbeweging.findUnique({ where: { id: item.jeugdbewegingId } });

    if (userExists && jeugdExists) {
      await prisma.jeugdbewegingUser.create({ data: item });
    } else {
      console.warn(`❌ Skipping jeugdbewegingUser entry for userId ${item.userId} and jeugdbewegingId ${item.jeugdbewegingId}`);
    }
  }

  await prisma.invitation.createMany({ data: invitations });
  await prisma.group.createMany({ data: groups });
  await prisma.post.createMany({ data: posts });
  await prisma.postLike.createMany({ data: postLikes });
  await prisma.event.createMany({ data: events });
  await prisma.volunteer.createMany({ data: volunteers });
  await prisma.attendee.createMany({ data: attendees });
  await prisma.leadersGroup.createMany({ data: leadersGroups });

  // Handle parent-child relationship
  for (const item of parentChild) {
    const parentExists = await prisma.user.findUnique({ where: { id: item.parentId } });

    if (parentExists) {
      await prisma.parentChild.create({ data: item });
    } else {
      console.warn(`❌ Skipping ParentChild entry for parentId ${item.parentId}`);
    }
  }

  await prisma.message.createMany({ data: messages });

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
