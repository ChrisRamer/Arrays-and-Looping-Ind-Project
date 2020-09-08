$(document).ready(function () {

	$("form#userInput").submit(function (e) { 

		e.preventDefault();
		console.log("User submitted response!");

		const number = $("#number").val();

		// If input is NaN (not a number), return error
		if (isNumber(number)) {
			
			const realNum = parseInt(number);
			let output = "";

			// Loops for each number up to the number given
			for (var i = 0; i <= realNum; i++) {

				if (i === realNum) {
					output += i.toString();
					break;
				}
				else {
					output += result(i).toString() + ", ";
				}

			}

			console.log(output);

		}

	});

	// Replace certain digits with phrases
	const result = function (digit) {
		switch (digit) {
			case 1:
				return "Beep!";
			case 2:
				return "Boop!";
			case 3:
				return "Won't you be my neighbor?";
			default:
				return digit;
		}
	}

	// Error handling
	const isNumber = function showError(num) {
		
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