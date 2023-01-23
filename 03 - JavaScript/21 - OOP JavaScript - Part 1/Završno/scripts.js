var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown",
};

const quotes = [
    "I'm going to my friends. I'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin.",
];

// 2.
var proto1 = Object.getPrototypeOf(character);
var proto2 = Object.getPrototypeOf(proto1);

console.log(proto1);
console.log(proto2);

// 3.
function getQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}
proto1.getQuote = getQuote;

console.log(character.getQuote());
