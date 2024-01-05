const motivationalMessages = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    // Add more motivational messages as needed
];

const riddles = [
    "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    "The more you take, the more you leave behind. What am I?",
    "The person who makes it, sells it. The person who buys it never uses it. What is it?",
    // Add more riddles as needed
];

export const getDayOfWeek = () => new Date().getDay();

export const getMotivationalMessage = () => {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    return motivationalMessages[randomIndex];
};

export const getRiddle = () => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    return riddles[randomIndex];
};
