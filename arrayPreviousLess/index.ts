function arrayPreviousLess(items: number[]): number[] {
	const lessThanList: number[] = [];

	for(let i = items.length - 1; i >= 0; i--) {
		console.log(i)
		for(let j = i ; j >= 0; j--){
			console.log(j);
			console.log(items[i] );
			console.log(items[j] );
				if(items[i] > items[j]) {
						lessThanList.unshift(items[j]);
						break;
				}else if(j === 0 ) {
					lessThanList.unshift(-1)
				}

		} 

	}

	return lessThanList
}

const items = [3, 5, 2, 4, 5];
console.log(arrayPreviousLess(items))