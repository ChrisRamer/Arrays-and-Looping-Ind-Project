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
					output += result(i.toString()).toString();
					break;
				}
				else {
					output += result(i.toString()).toString() + ", ";
				}

			}

			showOutput(output);

		}

	});

	// Replace certain digits with phrases
	const result = function (num) {

		// Note to Daniel: Had to toss the switch here since have to evaluate string instead of int, and can't use string.includes() with a switch :(

		// If num contains 3
		if (num.includes('3')) {
			return "Won't you be my neighbor?";
		}

		// If num contains 2
		if (num.includes('2')) {
			return "Boop!";
		}

		// If num contains 1
		if (num.includes('1')) {
			return "Beep!";
		}

		return num;
	}

	// Show output
	function showOutput(finalOutput) {
		$("#output").show();
		$("#output h3").text(finalOutput);
		$("#number").val("");
		$("button").text("Talk to Mr. Roboger again?");
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