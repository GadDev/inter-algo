function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
	const yourStrengh: number = yourLeft + yourRight
	const friendStength: number = friendsLeft + friendsRight
	if(yourStrengh !== friendStength) {
		return false
	}
	return true
}

function areEquallyStrong2(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
	const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
	const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
	const friendWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
	const friendStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

	return (yourStrongest === friendStrongest && yourWeakest === friendWeakest);
}

const yourLeft = 10;
const yourRight = 15;
const friendsLeft = 15; 
const friendsRight = 10
console.log(areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight))