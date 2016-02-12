"use strict";


(function() {
	var board;
	var turn;

	window.onload = function() {
		// setup event handlers for cols
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
		var row = getTopRow(this);
		if (row) {
			var piece = document.getElementById(this.id + "r" + row);
			var col = this.id.charAt(1);
			if (turn) {
				board[col - 1][row - 1] = "red";
				piece.className = "piece red";
			} else {
				board[col - 1][row - 1] = "black";
				piece.className = "piece black";
			}
			turn = !turn;
		}

	}

	function getTopRow(colDiv) {
		var col = colDiv.id.charAt(1);
		for (var i = 1; i <= board[col - 1].length; i++) {
			if (board[col - 1][i - 1] == 0) {
				return i;
			}
		}
		return null;
	}
})();
