"use strict";
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
/*ROUTE IMPORT*/
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const youthMovementRoutes_1 = __importDefault(require("./routes/youthMovementRoutes"));
const groupRoutes_1 = __importDefault(require("./routes/groupRoutes"));
const inviteRoutes_1 = __importDefault(require("./routes/inviteRoutes"));
const leadersGroupRoutes_1 = __importDefault(require("./routes/leadersGroupRoutes"));
const parentChildRoutes_1 = __importDefault(require("./routes/parentChildRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
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
/*SERVER*/
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
