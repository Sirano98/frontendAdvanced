// Random quote

var button = document.querySelector("button");
var quoteField = document.querySelector(".quote");
var author = document.querySelector(".author");
var background = document.querySelector(".wrapper");

button.addEventListener("click", getQuote);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function getQuote() {
    var index = getRandomInt(quoteBase.length);
    quoteField.innerHTML = quoteBase[index].quote;
    author.innerHTML = quoteBase[index].author;
    background.style.backgroundImage = "url(img/" + quoteBase[index].img + ".jpg)"
}

