(function() {
	window.onload = function() {
		document.getElementById("go").onclick = go;
	}

	function go() {
		var month = document.getElementById("month").value;
		var day = document.getElementById("day").value;
		var ajax = new XMLHttpRequest();
		ajax.onload = horiscope;
		ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/9/horoscope/horoscope-server.php?month=" 
					+ month + "&day=" + day, true);
		ajax.send();
	}

	function horiscope() {
		var results = document.getElementById("results");
		result.innerHTML = this.responseText;
	}
})();