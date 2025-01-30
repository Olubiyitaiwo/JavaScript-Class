function reverse(number){
	let answer = 0;
	reverseValue ="";
	while(number != 0){
	answer = number % 10
	reverseValue += answer.toString()
	number = Math.floor(number/10)
	}
	return reverseValue
	}
	console.log(reverse(1234))