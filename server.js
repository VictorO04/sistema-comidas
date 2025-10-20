import express from "express";
import dotenv from "dotenv";
import comidasRoutes from "./src/routes/comidasRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Servidor ligado aqui!");
});

app.use("/comidas", comidasRoutes);

app.listen(serverPort, () => {
    console.log(`🚀 Servidor online em: http://localhost:${serverPort}`);
});