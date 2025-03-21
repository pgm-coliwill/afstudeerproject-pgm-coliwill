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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParentChild = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createParentChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parentChildrenData = req.body;
        if (!Array.isArray(parentChildrenData) || parentChildrenData.length === 0) {
            res.status(400).json({ message: "Invalid request data. Expecting an array of children." });
            return;
        }
        console.log("📌 Received Parent-Child Data:", parentChildrenData);
        // ✅ Create Parent-Child entries in the database
        const createdEntries = yield prisma.parentChild.createMany({
            data: parentChildrenData.map((child) => ({
                parentId: child.parentId,
                childName: child.childName,
                groupId: child.groupId,
                relation: child.relation,
            })),
        });
        console.log("✅ Parent-Child Records Created:", createdEntries);
        res.status(201).json({ message: "Children registered successfully!", createdEntries });
    }
    catch (error) {
        console.error("❌ Failed to register children:", error);
        res.status(500).json({ message: "Error registering children." });
    }
});
exports.createParentChild = createParentChild;
