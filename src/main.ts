import express from "express";
import morgan from "morgan";
import articleRouter from "./routes/article.routes";
const app = express();

// 1) MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));
// 2) ROUTES
app.use("/api/v1/articles", articleRouter);
export default app;
