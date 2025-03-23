import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authenticate } from "./middleware/authMiddleware";
import http from "http";

/*ROUTE IMPORT*/

import userRoutes from "./routes/userRoutes";
import youthMovementRoutes from "./routes/youthMovementRoutes";
import groupRoutes from "./routes/groupRoutes";
import inviteRoutes from "./routes/inviteRoutes";
import leadersGroupRoutes from "./routes/leadersGroupRoutes";
import parentChildRoutes from "./routes/parentChildRoutes";
import postRoutes from "./routes/postRoutes";
import messageRoutes from "./routes/messageRoutes";
import youthMovementUserRoutes from "./routes/youthMovementUserRoutes";
import eventRoutes from "./routes/eventRoutes";

/*CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES*/

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRoutes);
app.use("/api/youthMovements", youthMovementRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/invite", inviteRoutes);
app.use("/api/leadersGroups", leadersGroupRoutes);
app.use("/api/parentChild", parentChildRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/youthMovementUsers", youthMovementUserRoutes);
app.use("/api/events", eventRoutes);

/*SOCKET.IO*/

import { Server as SocketIOServer } from "socket.io";
import { PrismaClient } from "@prisma/client";

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const prisma = new PrismaClient();

io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  
  socket.on("join", (userId: number) => {
    socket.join(userId.toString());
    console.log(`User ${userId} joined room ${userId}`);
  });


  socket.on("send_message", async ({ senderId, receiverId, message }) => {
    try {
      
      const saved = await prisma.message.create({
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
    } catch (err) {
      console.error("Error saving message:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Server with Socket.IO is running on port ${PORT}`);
});
