$(document).ready(function () {

	$("form#userInput").submit(function (e) { 

		e.preventDefault();
		console.log("User submitted response!");

		const number = $("#number").val();

		// If input is NaN (not a number), return error
		if (isNumber(number)) {
			// Loop through each digit
			for (var i = 0; i < number.length; i++) {
				//
			}
		}

	});

	// Error handling
	let isNumber = function showError(num) {
		
		// Show error
		if (isNaN(num) || num.length < 1) {
			console.log("User did not input a number, returning null");
			$("#output-error").show();
			$("#output-error h3").text("Please enter a valid number!");
			$("#number").val("");
			return false;
		}
		// Hide error
		else {
			$("#output-error").hide();
			return true;
		}

	}

});