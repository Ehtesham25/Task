import express from "express";
import cors from "cors";
import "./src/conn.js";
import bodyParser from "body-parser";
import postRoutes from "./src/routes/Posts.js";
import userRoutes from "./src/routes/users.js"

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const PORT = process.env.PORT || 3003;
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user",userRoutes)

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
