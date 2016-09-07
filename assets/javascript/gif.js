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
		{"index":29,"name":"Mini Cooper","photo":"assets/images/mini_cooper.jpg"},
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

	initialCarManufacturers();

	function initialCarManufacturers(){
		for (var i = 0; i < 6; i++) {
			do {
				carManufacturers[i] = Math.round(Math.random()*42);
			} while (carManufacturers.indexOf(carManufacturers[i]) != i);
		}
		displayCarManufacturerButtons();	
	}

	function displayCarManufacturerButtons(){ 

		// Deletes the car manufacturer buttons prior to adding new car manufactures from user.
		$('#carManufacturersButtons').empty();

		// Loops through the array of Car Manufacturer from the initial list and car manufacturers added.
		for (var i = 0; i < carManufacturers.length; i++){

			// Create car manufacturer buttons for each car manufacturer in the array carManufacturers.

		    var j = $('<input>')
		    j.attr('type','image');
		    j.attr('src', listOfManufacturers[carManufacturers[i]].photo);
		    j.attr('data-index', carManufacturers[i]); 
		    j.addClass('submit logo');
		    $('#carManufacturersButtons').append(j); 
		}
	}	

	// Click function to add Car Manufacturer
	$('#addCarManufacturer').on('click', function(){

		$('#errorMessage').text('');
		// This line of code will grab the input from the textbox
		var carManufacturer = ($('#inputCarManufacturer').val().trim()).toUpperCase();
		// Loop till input matches a car manufacturer in the List Of Car Manufacturers and then pushes into the array. Calls the displayCarManufacturerButtons.
		for(var i=0; i < listOfManufacturers.length; i++){
			if((listOfManufacturers[i].name).toUpperCase() == carManufacturer && carManufacturers.indexOf(i) == -1)
			{
				carManufacturers.push(i);
				displayCarManufacturerButtons();
				break;
			};
		};
		// Clear input field
		$('#inputCarManufacturer').val('');
		return false;
	})

	// Click function to check which logo clicked and call the displayGifs function
	$('.logo').on('click', function() {
		var carManufacturer = listOfManufacturers[$(this).attr('data-index')].name;
		$('#carManufacturersGifs').empty();
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + carManufacturer + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log(queryURL);
                console.log(response)
                var searchResults = response.data;
                for (var i = 0; i < searchResults.length; i++) {
                    var carManufacturersGif = $('<div>');

                    var rating = $('<p>').text("Rating: " + searchResults[i].rating);

                    var carManufacturerImage = $('<img>');
                    carManufacturerImage.attr('src', searchResults[i].images.fixed_height.url);

                    carManufacturersGif.append(rating);
                   	carManufacturersGif.append(carManufacturerImage);

                    $('#carManufacturersGifs').prepend(carManufacturersGif);
                }

            });
    });	
	
































	 /* body... */ 
})