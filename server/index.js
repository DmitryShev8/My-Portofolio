import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
    res.send("AI Server Running");
});

app.post("/generate", async (req, res) => {

    const { prompt } = req.body;

    console.log(prompt);

    res.json({
        success: true,
        image: null
    });

});

app.listen(5000, () => {
    console.log("Server started");
});