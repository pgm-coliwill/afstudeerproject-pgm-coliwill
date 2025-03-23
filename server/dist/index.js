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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = __importDefault(require("http"));
/*ROUTE IMPORT*/
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const youthMovementRoutes_1 = __importDefault(require("./routes/youthMovementRoutes"));
const groupRoutes_1 = __importDefault(require("./routes/groupRoutes"));
const inviteRoutes_1 = __importDefault(require("./routes/inviteRoutes"));
const leadersGroupRoutes_1 = __importDefault(require("./routes/leadersGroupRoutes"));
const parentChildRoutes_1 = __importDefault(require("./routes/parentChildRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const youthMovementUserRoutes_1 = __importDefault(require("./routes/youthMovementUserRoutes"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
/*CONFIGURATION */
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/*ROUTES*/
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/users", userRoutes_1.default);
app.use("/api/youthMovements", youthMovementRoutes_1.default);
app.use("/api/groups", groupRoutes_1.default);
app.use("/api/invite", inviteRoutes_1.default);
app.use("/api/leadersGroups", leadersGroupRoutes_1.default);
app.use("/api/parentChild", parentChildRoutes_1.default);
app.use("/api/posts", postRoutes_1.default);
app.use("/api/messages", messageRoutes_1.default);
app.use("/api/youthMovementUsers", youthMovementUserRoutes_1.default);
app.use("/api/events", eventRoutes_1.default);
/*SOCKET.IO*/
const socket_io_1 = require("socket.io");
const client_1 = require("@prisma/client");
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
const prisma = new client_1.PrismaClient();
io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.id);
    socket.on("join", (userId) => {
        socket.join(userId.toString());
        console.log(`User ${userId} joined room ${userId}`);
    });
    socket.on("send_message", (_a) => __awaiter(void 0, [_a], void 0, function* ({ senderId, receiverId, message }) {
        try {
            const saved = yield prisma.message.create({
                data: {
                    senderId,
                    receiverId,
                    message,
                },
                include: {
                    sender: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });
            io.to(receiverId.toString()).emit("receive_message", saved);
            io.to(senderId.toString()).emit("message_sent", saved);
        }
        catch (err) {
            console.error("Error saving message:", err);
        }
    }));
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});
const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
    console.log(`Server with Socket.IO is running on port ${PORT}`);
});
