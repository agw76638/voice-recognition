const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const activate = document.querySelector(".activate");

const greetings = [
  "Im good you little piece of love",
  "Doing good homeboi",
  "leave me alone",
  "Same as always"
];

const weather = ["Weather is fine", "You need a tan"];

const phrases = [
  "I have no idea",
  "Anyway, I should get going",
  "I can’t help you there",
  "It doesn’t make any difference to me",
  "That’s terrible"
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  activate.innerText = "voice is activated";
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  activate.innerText = "";
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  } else {
    const finalText = phrases[Math.floor(Math.random() * phrases.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
