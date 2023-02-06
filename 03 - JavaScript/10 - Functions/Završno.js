let words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(arr) {
	let word = '';
	for (let i = 0; i < arr.length; i++) {
		if (word.length < arr[i].length) {
			word = arr[i];
		}
	}
	return word;
}

let longestWord = findLongestWord(words);
console.log(longestWord);