"use strict";

var board; 
var turn;

(function() {

	window.onload = function() {
		// setup event handlers for columns
		for (var i = 1; i <= 7; i++) {
			document.getElementById("c" + i).onclick = drop;
		}
		setUp();
	}

	function setUp() {
		// access with board[col - 1][row - 1] | red is 1 | black is 2
		// 		 r 1, 2, 3, 4, 5, 6
		board = [ [0, 0, 0, 0, 0, 0,],   // c1
				  [0, 0, 0, 0, 0, 0,],   // c2
				  [0, 0, 0, 0, 0, 0,],   // c3
				  [0, 0, 0, 0, 0, 0,],   // c4
				  [0, 0, 0, 0, 0, 0,], 	 // c5
				  [0, 0, 0, 0, 0, 0,],	 // c6
				  [0, 0, 0, 0, 0, 0,] ]; // c7
		// red is true, black is false
		turn = true;
	}

	function drop() {
		var piece = document.getElementById(this.id + "r1");
	}
})();