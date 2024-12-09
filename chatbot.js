const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a simple chatbot created using TensorFlow.js.",
    "default": "I'm not sure how to respond to that. Can you ask something else?",
    "toxic": "Please keep the conversation respectful."
};
  
const form = document.getElementById('form');
const answer = document.getElementById('answer');
const btn = document.getElementById('btn');
const question = document.getElementById('question');
console.log('question', question.value);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('question', question.value);


    // if (question.value === "hello") {
    //     answer.innerText = responses.hello;
        
    // } else if (question.value === "how are you") {
    //     answer.innerText = responses["how are you"];

        
    // } else if (question.value === 'what is your name') {
    //     answer.innerText =responses["what is your name"]


    // }else if (question.value === 'default') {
    //     answer.innerText = responses["default"];


    // }else if (question.value === 'toxic') {
    //     answer.innerText = responses["toxic"];
    // }

console.log('slsl', responses.hasOwnProperty(question.value));

   answer.innerHTML= responses.hasOwnProperty(question.value)? responses[question.value]: responses['default']

    //ANother way of doing by Quentin
    //answer.innerHTML = responses[question.value] || responses['default']

    // another way by prof
     const inputValue = question.value.toLowerCase().trim();
    // answer.innerHTML = responses[inputValue] || responses['default'];

    //another way by prof
    // for (const key in responses) {
    //     if (inputValue.includes[key]) {
    //         console.log('key', key);
    //         answer.innerHTML = responses[key];
    //         find = true;
    //     }
    // }
    // if (!find) {
    //     answer.innerHTML = responses.default;
    // }
})



