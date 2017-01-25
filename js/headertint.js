// Changes header tint based on the month. (it's cute)

document.addEventListener('DOMContentLoaded', function() {
	var colors = ["0, 34, 68", "0, 68, 68", "0, 68, 34", "0, 68, 0", "34, 68, 0", "85, 68, 0", "68, 34, 0", "68, 0, 0", "68, 0, 34", "68, 0, 68", "34, 0, 68", "0, 0, 68"]; // Awful nonsense
	var d = new Date();

	document.getElementById("tintBox").style.boxShadow = "inset 0 0 0 1000px rgba(" + colors[d.getMonth()] + ", .5)";
});
