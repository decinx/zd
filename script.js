function daria() {
	const jeden = document.getElementById("x").value
	const dwa = document.getElementById("y").value
	const wynik = Number(jeden) + Number(dwa)
	document.getElementById("obliczenia").innerHTML = wynik
}

function ania() {
	const jeden = document.getElementById("p").value
	const wynik = jeden * 0.12 - 3600
	document.getElementById("dochody").innerHTML = wynik.toFixed(2)
}

function olek() {
	const jeden = document.getElementById("c").value
	const dwa = document.getElementById("d").value
	const wynik = (jeden / dwa) * 100
	document.getElementById("oblicz").innerHTML = wynik.toFixed(2)
}

function iwa() {
	const jeden = document.getElementById("s").value
	const dwa = document.getElementById("pp").value
	const trzy = document.getElementById("m").value
	const wynik = (jeden * dwa) - trzy
	document.getElementById("oblic").innerHTML = wynik.toFixed(2)
}

function dwo() {
	const jeden = document.getElementById("dw").value
	const dwa = document.getElementById("kw").value
	const wynik = jeden * dwa
	document.getElementById("dwok").innerHTML = wynik.toFixed(2)
}


