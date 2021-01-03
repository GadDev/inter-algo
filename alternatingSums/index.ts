const reducer = (accumulator, currentValue) => accumulator + currentValue;
function alternatingSums(a: number[]): number[] {
	const arrayTotalWeightTeam: number[] = []
	const team1: number[] = []
	const team2: number[] = []
	for(let i = 0; i < a.length; i++) {
		if(i % 2) {
			team2.push(a[i])
			
		} else {
			team1.push(a[i])
		}
	}
	arrayTotalWeightTeam.push(team1.reduce(reducer))
	arrayTotalWeightTeam.push(team2.reduce(reducer))

	return arrayTotalWeightTeam
}

function alternatingSums2(a: number[]): number[]{
	let evenSum = 0
	let oddSum = 0
	a.forEach((element, index) => {
		if(index % 2 === 0) {
			evenSum += element
		}else {
			oddSum += element
		}
	}) 
	return [evenSum, oddSum]
}

const a = [50, 60, 60, 45, 70];
const b = [200,100, 200, 300, 900, 1000];
// alternatingSums(a)
console.log(alternatingSums(a))
console.log(alternatingSums(b))