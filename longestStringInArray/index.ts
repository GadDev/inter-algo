function allLongestStrings(inputArray: string[]): string[] {
	// const arrayOfLongestStrings = [inputArray[0]]
	// for(let i = 1; i < inputArray.length; i++) {
	// 	if(inputArray[i].length >= inputArray[0].length) {
	// 		arrayOfLongestStrings.push(inputArray[i]);
	// 	} 
	// }
	// return arrayOfLongestStrings

	//simple solution
	let longestLongest = 0;
	let longestWords = [];
	inputArray.forEach((word: string) => {
		longestLongest = longestLongest < word.length ? word.length : longestLongest
	})
	inputArray.forEach((word: string) => {
		if(word.length === longestLongest) {
			longestWords.push(word);
		}
	})

	return longestWords
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["abaff", "aawws", "asd", "vccccd", "abcccccca", 'abcccccca']));