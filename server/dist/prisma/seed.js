"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prisma = new client_1.PrismaClient();
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function resetSequence(modelName) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const quotedModelName = `"${modelName}"`;
        const maxIdResult = yield prisma.$queryRaw `SELECT MAX(id) AS max_id FROM ${client_1.Prisma.raw(quotedModelName)}`;
        if (!((_a = maxIdResult[0]) === null || _a === void 0 ? void 0 : _a.max_id))
            return;
        const nextId = maxIdResult[0].max_id + 1;
        yield prisma.$executeRaw(client_1.Prisma.raw(`
      SELECT setval(pg_get_serial_sequence('${quotedModelName}', 'id'), ${nextId}, false)
    `));
        console.log(`✅ Reset sequence for ${modelName} to ${nextId}`);
    });
}
function deleteAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.parentChild.deleteMany();
        yield prisma.leadersGroup.deleteMany();
        yield prisma.attendee.deleteMany();
        yield prisma.volunteer.deleteMany();
        yield prisma.event.deleteMany();
        yield prisma.postLike.deleteMany();
        yield prisma.post.deleteMany();
        yield prisma.group.deleteMany();
        yield prisma.invitation.deleteMany();
        yield prisma.youthMovementUser.deleteMany();
        yield prisma.youthMovement.deleteMany(); // ✅ Delete YouthMovements before Users
        yield prisma.user.deleteMany();
        console.log("🗑 All existing data cleared.");
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataDirectory = path_1.default.join(__dirname, "seedData");
        // Delete all existing data
        yield deleteAllData();
        // Load JSON data
        const users = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "users.json"), "utf-8"));
        const youthMovements = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "youthMovements.json"), "utf-8"));
        const youthMovementUser = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "youthMovementsUser.json"), "utf-8"));
        const invitations = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "invitations.json"), "utf-8"));
        const groups = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "groups.json"), "utf-8"));
        const posts = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "posts.json"), "utf-8"));
        const postLikes = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "postLikes.json"), "utf-8"));
        const events = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "events.json"), "utf-8"));
        const volunteers = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "volunteers.json"), "utf-8"));
        const attendees = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "attendees.json"), "utf-8"));
        const leadersGroups = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "leadersGroups.json"), "utf-8"));
        const parentChild = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "parentChild.json"), "utf-8"));
        const messages = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dataDirectory, "messages.json"), "utf-8"));
        // ✅ STEP 1: Seed Users FIRST
        yield prisma.user.createMany({ data: users });
        console.log("✅ Users seeded");
        // ✅ STEP 2: Ensure adminId exists before inserting YouthMovements
        const validYouthMovements = [];
        for (const movement of youthMovements) {
            const adminExists = yield prisma.user.findUnique({ where: { id: movement.adminId } });
            if (adminExists) {
                validYouthMovements.push(movement);
            }
            else {
                console.warn(`❌ Skipping youthMovement with adminId ${movement.adminId} (Admin does not exist)`);
            }
        }
        // ✅ Insert YouthMovements only if they have a valid adminId
        if (validYouthMovements.length > 0) {
            yield prisma.youthMovement.createMany({ data: validYouthMovements });
            console.log("✅ YouthMovements seeded");
        }
        // ✅ STEP 3: Seed YouthMovementUser with foreign key validation
        for (const item of youthMovementUser) {
            const userExists = yield prisma.user.findUnique({ where: { id: item.userId } });
            const jeugdExists = yield prisma.youthMovement.findUnique({ where: { id: item.youthMovementId } });
            if (userExists && jeugdExists) {
                yield prisma.youthMovementUser.create({ data: item });
            }
            else {
                console.warn(`❌ Skipping youthMovementUser for userId ${item.userId} and youthMovementId ${item.youthMovementId}`);
            }
        }
        // ✅ STEP 4: Insert remaining data
        yield prisma.invitation.createMany({ data: invitations });
        yield prisma.group.createMany({ data: groups });
        yield prisma.post.createMany({ data: posts });
        yield prisma.postLike.createMany({ data: postLikes });
        yield prisma.event.createMany({ data: events });
        yield prisma.volunteer.createMany({ data: volunteers });
        yield prisma.attendee.createMany({ data: attendees });
        yield prisma.leadersGroup.createMany({ data: leadersGroups });
        // ✅ STEP 5: Handle Parent-Child relationships
        for (const item of parentChild) {
            const parentExists = yield prisma.user.findUnique({ where: { id: item.parentId } });
            if (parentExists) {
                yield prisma.parentChild.create({ data: item });
            }
            else {
                console.warn(`❌ Skipping ParentChild entry for parentId ${item.parentId}`);
            }
        }
        // ✅ STEP 6: Seed Messages
        yield prisma.message.createMany({ data: messages });
        console.log("✅ Seeding completed successfully!");
    });
}
// Run the seeding script
main()
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
