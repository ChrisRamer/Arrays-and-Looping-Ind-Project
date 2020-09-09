$(document).ready(function () {

	$("form#userInput").submit(function (e) { 

		e.preventDefault();

		const number = $("#number").val();

		// If input is NaN (not a number), return error
		if (isNumber(number)) {
			
			const realNum = parseInt(number);
			let output = "";

			// Easter egg check
			if (!isEasterEgg(number)) {

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

	// Easter egg
	const isEasterEgg = function showEgg(number) {

		const num = parseInt(number);

		// If num is 0
		if (number === "0") {
			showOutput("Shower thought #1: If a 0 has no value, does that mean 100 is the same value as 1? 🤔");
			return true;
		}

		// If num is negative 0
		if (number === "-0") {
			showOutput("Shower thought #2: Personally, I think -0 should petition to become a real number. There's no reason to outcast it! 🤔")
			return true;
		}

		// If num is a negative
		if (num < 0) {
			showOutput("Shower thought #3: Hypothetically, if you had a negative zero, would the absolute value of that -0 be positive or negative 0? 🤔");
			return true;
		}

		// If num is O:
		if (Math.abs(num) === 69420 || Math.abs(num) === 42069) {
			showOutput("Woah there, cowboy! Please keep this PG-13!! 🤠");
			return true;
		}

		return false;

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
			$("#output").hide();
			$("#output-error").show();
			$("#output-error h3").text("Please enter a valid number!");
			$("#number").val("");
			$("button").text("Try talking to Mr. Roboger again?");
			return false;
		}
		// Hide error
		else {
			$("#output-error").hide();
			return true;
		}

	}

});