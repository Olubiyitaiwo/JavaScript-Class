function sumDigits(number){
		let count = 0;
		let num2 = 0;
		while(number != 0){
	        count += number % 10;
		number = Math.floor(number/10)
		}
		return count
	};
	console.log(sumDigits(124));