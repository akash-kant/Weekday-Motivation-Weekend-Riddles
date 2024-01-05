import express from "express";
import ejs from "ejs";
import { getDayOfWeek, getMotivationalMessage, getRiddle } from "./messages.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

const randomImages = [
    '/random1.jpg',
    '/random2.jpg',
    '/random3.jpg',
    '/random4.jpg',
    '/random5.jpg',
    '/random6.jpg',
    '/random7.jpg',
    // Add more image paths as needed
];

app.get("/", (req, res) => {
    const today = new Date();
    const dayOfWeek = getDayOfWeek();

    let type = "a weekday";
    let content = getMotivationalMessage();
    let backgroundImage = '/weekday.jpeg'; // Default background image for weekdays
    let currentDay = today.toLocaleDateString('en-US', { weekday: 'long' });
    let currentDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    let randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        type = "the weekend";
        content = getRiddle();
        backgroundImage = '/weekend.jpeg'; // Background image for weekends
    }

    res.render("index.ejs", {
        dayType: type,
        content: content,
        backgroundImage: backgroundImage, // Pass the background image to the template
        currentDay: currentDay,
        currentDate: currentDate,
        randomImage: randomImage,
    });

});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
