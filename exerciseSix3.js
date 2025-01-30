function reverse(number){
	let count = 0;
	while(number != 0){
	count = number % 10
	number = Math.floor(number/10)
	if (number == count){
	return("True")
	}
	else{
	return("False")
	}
	}	
 }
	console.log(reverse(121))