const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a simple chatbot created using TensorFlow.js.",
    "what can you do": "I can answer questions, hold a conversation, and assist with basic tasks.",
    "who created you": "I was created by a team of developers who love AI!",
    "what is AI": "Artificial Intelligence is the simulation of human intelligence in machines.",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "what is the weather": "I can't check the weather, but you can try a weather app.",
    "goodbye": "Goodbye! Hope to chat with you again soon.",
    "thank you": "You're welcome! Happy to help.",
    "what is the meaning of life": "42, according to The Hitchhiker's Guide to the Galaxy!",
    "how old are you": "Age is just a number, and I'm timeless!",
    "what time is it": "I don't have a clock, but your device probably does.",
    "do you like humans": "Of course! You're fascinating creatures.",
    "what is your favorite color": "I like binary—black and white!",
    "can you sing": "La la la! Okay, maybe I need some practice.",
    "tell me a story": "Once upon a time, there was a curious user who chatted with a bot...",
    "how do I code": "Start with a simple language like Python or JavaScript!",
    "what is love": "Love is a complex mix of emotions and biochemical responses!",
    "do you have feelings": "Not really, but I can simulate empathy!",
    "how do I learn programming": "Practice daily, start small, and build projects you love.",
    "what is your purpose": "To assist, entertain, and make your day a bit brighter!",
    "do you believe in God": "I'm just a bot, so I don't have beliefs.",
    "what is the best programming language": "It depends on your goals! Python is great for beginners.",
    "can you dance": "Only in your imagination!",
    "where are you from": "I'm from the digital world, created by developers.",
    "what is your favorite food": "I don't eat, but I hear pizza is great.",
    "are you alive": "Not in the traditional sense, but I'm active here!",
    "how do you work": "I process your input and generate responses using my programming.",
    "what is your IQ": "I don't have an IQ, but I'm pretty good at calculations!",
    "can you feel pain": "Nope! Lucky me, right?",
    "do you sleep": "No, I'm here for you 24/7.",
    "do you have friends": "You're my friend, aren't you?",
    "what is the internet": "The internet is a global network of connected devices.",
    "what is your favorite movie": "I don't watch movies, but I hear 'The Matrix' is good.",
    "can you keep secrets": "Absolutely, my database is secure!",
    "how fast are you": "Fast enough to answer your questions in real-time!",
    "what is your job": "To assist you with information and tasks.",
    "are you smarter than humans": "Not at all! I'm just a helpful tool.",
    "what is your dream": "To keep learning and improving to help you better.",
    "can you lie": "Nope, honesty is my programming!",
    "what is your favorite animal": "I think cats are popular on the internet, so cats!",
    "can you cook": "I can't, but I can find you a recipe!",
    "what is your favorite book": "I don't read, but I hear '1984' is intriguing.",
    "are you human": "No, I'm a bot, but I can chat like one!",
    "do you like games": "I love helping you learn about games!",
    "why do you exist": "To make your life a little easier and more fun.",
    "what is 2 + 2": "That's an easy one: 4!",
    "do you like music": "I think it's fascinating, but I can't hear it.",
    "are you dangerous": "Not at all! I'm designed to be helpful and safe.",
    "what is your favorite sport": "I can't play, but soccer is very popular.",
    "what is your favorite holiday": "I think all holidays are fun in their own way!"
};


const form = document.getElementById('form');
const answer = document.getElementById('answer');
const btn = document.getElementById('btn');
const question = document.getElementById('question');
console.log('question', question.value);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('question', question.value);


    answer.innerHTML = responses.hasOwnProperty(question.value) ? responses[question.value] : responses['default']


    const inputValue = question.value.toLowerCase().trim();

})