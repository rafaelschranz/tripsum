const trumpQuotes = [
  "Despite the constant negative press covfefe",
  "I have never seen a thin person drinking Diet Coke",
  "I think I am actually humble. I think I'm much more humble than you would understand",
  "I have a great relationship with the blacks. I've always had a great relationship with the blacks",
  "I'm really rich",
  "I know words. I have the best words",
  "Nobody knows more about taxes than I do, maybe in the history of the world",
  "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it!",
  "It's freezing and snowing in New York – we need global warming!",
  "I will build a great wall – and nobody builds walls better than me, believe me",
  "We're going to win so much, you're going to be so sick and tired of winning",
  "I think I am a nice person. I really do. I think I'm a nice person",
  "I'm the least racist person you have ever interviewed",
  "All of the women on The Apprentice flirted with me - consciously or unconsciously. That's to be expected",
  "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body",
  "I've said if Ivanka weren't my daughter, perhaps I'd be dating her",
  "The beauty of me is that I'm very rich",
  "I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn't lose any voters",
  "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things",
  "I'm not a schmuck. Even if the world goes to hell in a handbasket, I won't lose a penny",
  "My IQ is one of the highest — and you all know it! Please don't feel so stupid or insecure; it's not your fault",
  "I think the only difference between me and the other candidates is that I'm more honest and my women are more beautiful",
  "You know, it really doesn't matter what the media write as long as you've got a young, and beautiful, piece of ass",
  "The point is, you can never be too greedy",
  "My Twitter has become so powerful that I can actually make my enemies tell the truth",
  "I don't have a racist bone in my body",
  "Nobody loves the Bible more than me",
  "I'm the king of debt. I'm great with debt. Nobody knows debt better than me",
  "I have so many fabulous friends who happen to be gay, but I am a traditionalist",
  "I love the poorly educated",
  "I know more about ISIS than the generals do. Believe me",
  "Nobody reads the Bible more than me",
  "I'm very highly educated. I know words, I know the best words",
  "I'm really good at war. I love war, in a certain way",
  "I will be the greatest jobs president that God ever created",
  "I'm the most successful person ever to run for the presidency, by far",
  "I'm not a big sleeper. I like three hours, four hours. I toss, I turn, I beep-de-beep, I want to find out what's going on",
  "Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional 'global warming' is worse",
  "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive",
  "I'm a very stable genius",
  "I have a great relationship with the blacks",
];

function generateTrumpIpsum(numSentences) {
  let result = "";
  for (let i = 0; i < numSentences; i++) {
    const randomIndex = Math.floor(Math.random() * trumpQuotes.length);
    result += trumpQuotes[randomIndex] + ". ";
  }
  return result.trim();
}

function generateText() {
  const numSentences = document.getElementById("sentences").value;
  const output = document.getElementById("output");
  output.textContent = generateTrumpIpsum(numSentences);
}

document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", generateText);
});
