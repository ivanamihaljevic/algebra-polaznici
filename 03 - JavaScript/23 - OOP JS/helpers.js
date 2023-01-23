function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// export { getRandomNumber };

module.exports = {
    // Naziv funkcije koji ćemo koristiti u main.js : naziv stvarne funkcije
    getRandomNumber: getRandomNumber,
};