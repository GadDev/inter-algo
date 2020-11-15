function addBorder(picture: string[]): any {
	// const wall = '*****';
	// const newArray = [];
	// picture.forEach(item => {
	// 	let newS = "*" + item + "*";
	// 	newArray.push(newS);
	// });
	// newArray.push(wall);
	// newArray.unshift(wall);
	// return newArray

	//OR
	let wall = '*'.repeat(picture[0].length + 2);
	// let wall = '';
	// for (let i = 0; i < lengthOfWall; i++) {
	// 	wall = wall.concat("*")
	// }
	picture.unshift(wall);
	picture.push(wall);

	for(let j = 1; j < picture.length - 1; j++ ) {
		picture[j] = "*".concat(picture[j], '*');
	}
	return picture;
}

console.log(addBorder(["abc", "ded"]));