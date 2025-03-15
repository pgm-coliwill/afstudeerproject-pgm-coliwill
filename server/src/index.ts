import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authenticate } from "./middleware/authMiddleware";

/*ROUTE IMPORT*/

import userRoutes from "./routes/userRoutes";
import youthMovementRoutes from "./routes/youthMovementRoutes";
import groupRoutes from "./routes/groupRoutes";
import inviteRoutes from "./routes/inviteRoutes";

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

/*SERVER*/
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
