function createBoard() {
	let board = [];
	const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	for(let y = 0; y < 8; y++) {
		for(let x = 0; x < 8; x++) {
			console.log(xAxis[x])
			board.push(xAxis[x] + (y + 1));
		}
	} 
	return board;
}
const board = createBoard();
console.log(createBoard()) 

function possibleMoveBishop(pos,board){
	let moves = [];
	for(let i = 0; i < board.length; i++) {
		console.log(board[i]);
	}
	return moves
}

function bishopAndPawn(bishop: string, pawn: string): boolean {
	const board = {
		"a": 1,
		"b": 2,
		"c": 3,
		"d": 4,
		"e": 5,
		"f": 6,
		"g": 7,
		"h": 8
	}

	const bishopX = board[bishop[0]];
	const bishopY = parseInt(bishop[1]);
	console.log(bishopX);
	console.log(bishopY);
	const pawnX = board[pawn[0]];
	const pawnY = parseInt(pawn[1]);
	console.log(pawnX);
	console.log(pawnY);
	if(bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === pawnX + bishopY) {
		return true
	}
	return false
}

console.log(bishopAndPawn('a3', 'b4')); 
