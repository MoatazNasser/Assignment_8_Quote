var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var currentIndex = 0;
var lastIndex = 0;

var quotesArr = [
  "“Be yourself; everyone else is already taken.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“So many books, so little time.”",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
  "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",
  "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
  "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
  "“It does not do to dwell on dreams and forget to live.”",
  "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
  "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
  "“We are all in the gutter, but some of us are looking at the stars.”",
  "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”",
  "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
];
var authorArr = [
  "..Oscar Wilde..",
  "..Albert Einstein..",
  "..Frank Zappa..",
  "..Dr. Seuss..",
  "..Mae West..",
  "..Mahatma Gandhi..",
  "..Robert Frost..",
  "..Mark Twain..",
  "Elbert Hubbard",
  "..Oscar Wilde..",
  "..J.K. Rowling, Harry Potter and the Chamber of Secrets..",
  "..Jane Austen, Northanger Abbey..",
  "..Marilyn Monroe..",
  "..Albert Einstein..",
  "..J.K. Rowling, Harry Potter and the Sorcerer's Stone..",
  "..Mark Twain..",
  "..John Green, The Fault in Our Stars..",
  "..Oscar Wilde, Lady Windermere's Fan..",
  "..Neil Gaiman, Coraline..",
  "..William Shakespeare, As You Like It..",
];

btn.onclick = function () {
  lastIndex = changeIndex();
  quote.innerHTML = `
  <p class="fs-2">${quotesArr[currentIndex]}</p>
<p class="fs-4 text-secondary">${authorArr[currentIndex]}</p>
`;
};

// to be sure every click will show new diff quote
function changeIndex() {
  currentIndex = Math.floor(Math.random() * 20);

  while (currentIndex == lastIndex) {
    currentIndex = Math.floor(Math.random() * 20);
    // console.log("round");
  }
  return currentIndex;
}
