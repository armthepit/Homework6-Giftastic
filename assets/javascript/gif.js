$(document).ready(function () {

	listOfManufacturers = [
		{"index":0,"name":"Acura","photo":"assets/images/acura.jpg"},
		{"index":1,"name":"Alfa Romeo","photo":"assets/images/alfaromeo.jpg"},
		{"index":2,"name":"Aston Martin","photo":"assets/images/aston_martin.jpg"},
		{"index":3,"name":"Audi","photo":"assets/images/audi.jpg"},
		{"index":4,"name":"Bentley","photo":"assets/images/bentley.jpg"},
		{"index":5,"name":"Cadillac","photo":"assets/images/cadillac.jpg"},
		{"index":6,"name":"Chevrolet","photo":"assets/images/chevrolet.jpg"},
		{"index":7,"name":"Chrysler","photo":"assets/images/Chrysler.jpg"},
		{"index":8,"name":"Daihatsu","photo":"assets/images/daihatsu.jpg"},
		{"index":9,"name":"Dodge","photo":"assets/images/dodge.jpg"},
		{"index":10,"name":"Ferrari","photo":"assets/images/ferrari.jpg"},
		{"index":11,"name":"Fiat","photo":"assets/images/fiat.jpg"},
		{"index":12,"name":"Ford","photo":"assets/images/ford.jpg"},
		{"index":13,"name":"GMC","photo":"assets/images/gmc.jpg"},
		{"index":14,"name":"Honda","photo":"assets/images/honda.jpg"},
		{"index":15,"name":"Hummer","photo":"assets/images/hummer.jpg"},
		{"index":16,"name":"Hyundai","photo":"assets/images/hyundai.jpg"},
		{"index":17,"name":"Infiniti","photo":"assets/images/infiniti.jpg"},
		{"index":18,"name":"Jaguar","photo":"assets/images/jaguar.jpg"},
		{"index":19,"name":"Jeep","photo":"assets/images/jeep.jpg"},
		{"index":20,"name":"Kia","photo":"assets/images/kia.jpg"},
		{"index":21,"name":"Lamborghini","photo":"assets/images/lamborghini.jpg"},
		{"index":22,"name":"Land Rover","photo":"assets/images/land_rover.jpg"},
		{"index":23,"name":"Lexus","photo":"assets/images/lexus.jpg"},
		{"index":24,"name":"Lotus","photo":"assets/images/lotus.jpg"},
		{"index":25,"name":"Maserati","photo":"assets/images/maserati.jpg"},
		{"index":26,"name":"Mazda","photo":"assets/images/mazda.jpg"},
		{"index":27,"name":"Mercedes Benz","photo":"assets/images/mercedes_benz.jpg"},
		{"index":28,"name":"MG","photo":"assets/images/mg.jpg"},
		{"index":29,"name":"Mini Cooper Romeo","photo":"assets/images/mini_cooper.jpg"},
		{"index":30,"name":"Mitsubishi","photo":"assets/images/mitsubishi.jpg"},
		{"index":31,"name":"Nissan","photo":"assets/images/nissan.jpg"},
		{"index":32,"name":"Peugeot","photo":"assets/images/peugeot.jpg"},
		{"index":33,"name":"Porsche","photo":"assets/images/porsche.jpg"},
		{"index":34,"name":"Renault","photo":"assets/images/renault.jpg"},
		{"index":35,"name":"Rolls Royce","photo":"assets/images/rolls_royce.jpg"},
		{"index":36,"name":"Saab","photo":"assets/images/saab.jpg"},
		{"index":37,"name":"Subaru","photo":"assets/images/Subaru.jpg"},
		{"index":38,"name":"Suzuki","photo":"assets/images/suzuki.jpg"},
		{"index":39,"name":"Tesla","photo":"assets/images/tesla.jpg"},
		{"index":40,"name":"Toyota","photo":"assets/images/toyota.jpg"},
		{"index":41,"name":"Volkswagen","photo":"assets/images/volkswagen.jpg"},				
		{"index":42,"name":"Volvo","photo":"assets/images/volvo.jpg"},
	];


	var carManufacturers = [-1,-1,-1,-1,-1,-1];
	console.log(carManufacturers);
	var newHtml = '';

	function initialCarManufacturers(){
		for (var i = 0; i < 6; i++) {
			do {
				carManufacturers[i] = Math.round(Math.random()*42);
			} while (carManufacturers.indexOf(carManufacturers[i]) != i);
		}	
	}	

	initialCarManufacturers();
































	 /* body... */ 
})