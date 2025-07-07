
const moodQuotes = {
  Happy: [
    "Happiness is a choice. Choose it every day!",
    "Keep smiling, it makes people wonder why!",
    "Your joy is your power. Spread it!"
  ],
  Sad: [
    "It’s okay to not be okay.",
    "Tears are words the heart can't express.",
    "Every storm runs out of rain."
  ],
  Angry: [
    "Breathe in... let go.",
    "Anger doesn't solve, it burns. Stay calm.",
    "Respond with grace, not rage."
  ],
  Peaceful: [
    "Peace begins with a smile.",
    "Stillness is strength.",
    "Let go. Find your calm."
  ],
  Lost: [
    "Not all who wander are lost.",
    "Clarity comes from stillness.",
    "You’ll find your way — trust the journey."
  ],
  Excited: [
    "Your energy is magic — use it!",
    "Stay excited. Stay alive.",
    "Great things are coming!"
  ],
  Unbothered: [
    "Unbothered, moisturized, thriving. ✨",
    "Not your vibe? Not your problem.",
    "Keep it cute and unbothered. 😌"
  ],
  Tired: [
    "Rest is productive too.",
    "You deserve a break.",
    "Breathe. Recharge. Go again."
  ]
};


const buttons = document.querySelectorAll("button");
const quoteBox = document.getElementById("quote-box");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.value; 
    const quotes = moodQuotes[mood];
    if (quotes) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteBox.innerHTML = `<div class="quote-heading"> Here's Quote for you!!🍄</div><br>
      <div class="quote-text">"${quotes[randomIndex]}" </div>`;
    } else {
      quoteBox.innerText = "Oops! No quote found for that mood.";
    }
  });
});
