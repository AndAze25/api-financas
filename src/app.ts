import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        message : "API Finanças funcionando com NodeJS, Express, TypeScript e TypeORM"
    })
});

export default app;