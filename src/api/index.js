// https://currencyfreaks.com/documentation.html

// https://api.currencyfreaks.com/supported-currencies

import modulo from "./optionCurrent.js";

const KEY_API = "a07f26dbdc6042d1aacf075ba7063623";

const URL_API = "https://api.currencyfreaks.com/currency-symbols";

// peticion de monedas
fetch(URL_API)
	.then((response) => response.json())
	.then((data) => {
		const monedasAbbr = Object.keys(data);
		const monedasName = Object.values(data);

		crearMonedaAbbr(monedasAbbr);
		// crearMonedaName(monedasName);
	});

// Crear tipos de monedas dinamicamente
function crearMonedaAbbr(monedas) {
	const mostrarMoneda = document.getElementById("moneda-proxima");

	for (let i = 0; i < monedas.length; i++) {
		const opcion = document.createElement("option");

		opcion.value = monedas[i];
		opcion.innerText = monedas[i];
		opcion.id = monedas[i];
		opcion.className = "moneda";

		mostrarMoneda.append(opcion);
	}
}

function crearMonedaName(monedas) {
	const mostrarMonedaProxima = document.getElementById("moneda-proxima");

	for (let i = 0; i < monedas.length; i++) {
		const opcion = document.createElement("option");

		opcion.value = monedas[i];
		opcion.innerText = monedas[i];
		opcion.id = monedas[i];
		opcion.className = "moneda";

		mostrarMonedaProxima.append(opcion);
	}
}

// boton cambio
const cambio = document.querySelector("button");
cambio.addEventListener("click", modulo);
