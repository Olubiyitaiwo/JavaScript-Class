function logObjectProperties(obj) {
	for(let key in obj){	
		console.log(key + " : " + obj[key]);
   }
}

	const car = {
		make : "Toyota",
		model : "Camry",
		year : 2021
	
	};
	logObjectProperties(car);

	console.log(" ");
	const {make, year} = car;
		console.log(make);
		console.log(year);

	



//for (const property in object) {
//  console.log(`${property}: ${object[property]}`);