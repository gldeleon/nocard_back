import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import searchRoutes from "./routes/search.routes";

const app = express();

app.set("port", process.env.PORT || 9001);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRoutes);
app.use(searchRoutes);

app.get("/", (req, res) => {
  res.send("Working ok");
});

export default app;
