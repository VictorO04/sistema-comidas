import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Servidor ligado aqui!");
});

app.listen(serverPort, () => {
    console.log(`🚀 Servidor online em: http://localhost:${serverPort}`);
});