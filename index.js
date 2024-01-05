import express from "express";
import ejs from "ejs";
import { getDayOfWeek, getMotivationalMessage, getRiddle } from "./messages.js";

const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    const today = new Date();
    const dayOfWeek = getDayOfWeek();

    let type = "a weekday";
    let content = getMotivationalMessage();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        type = "the weekend";
        content = getRiddle();
    }

    const currentDate = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    res.render("index.ejs", {
        dayType: type,
        content: content,
        currentDate: currentDate,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
