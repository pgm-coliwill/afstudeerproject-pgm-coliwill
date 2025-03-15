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
exports.createAdmin = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cognitoId } = req.params;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                cognitoId,
            },
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(user);
    }
    catch (error) {
        console.error("failed to get user", error);
        res.status(500).json({ message: "Failed to get user" });
    }
});
exports.getUser = getUser;
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cognitoId, email, firstName, lastName } = req.body;
    try {
        const user = yield prisma.user.create({
            data: {
                cognitoId,
                email,
                firstName,
                lastName,
            },
        });
        res.json(user);
    }
    catch (error) {
        console.error("failed to create user", error);
        res.status(500).json({ message: "Failed to create user" });
    }
});
exports.createAdmin = createAdmin;
