// https://api.currencyfreaks.com/latest?apikey=a07f26dbdc6042d1aacf075ba7063623&symbols=ARS

// peticion de monedas
export default function calcular() {
	const KEY_API = "a07f26dbdc6042d1aacf075ba7063623";
	const MONEDA_REQUERIDA = "ARS";

	const moneda = document.getElementById("moneda-proxima").value;

	const URL_API = `https://api.currencyfreaks.com/latest?apikey=${KEY_API}&symbols=${moneda}`;

	fetch(URL_API)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.rates[`${moneda}`]);
			convertirMoneda(data.rates[`${moneda}`], mostrarCantidad());
		});

	function convertirMoneda(cambio, montoUsuario = 1) {
		let resultDolar = 0;
		let resultPesos = 0;

		const BLUE = 2.17;

		resultDolar = montoUsuario / Number(cambio);
		resultPesos = montoUsuario * Number(cambio);

		mostrarResultado((resultPesos * BLUE).toFixed(2));
	}

	// valor de la moneda q ingresan
	function mostrarCantidad() {
		const cantidadIngresada = document.getElementById("monto");
		return cantidadIngresada.value;
	}

	// mostrar resultado en el input disabled
	function mostrarResultado(cantidad) {
		const result = document.getElementById("resultado");

		result.style.color = "blue";
		result.style.fontSize = "20px";
		result.value = cantidad;
	}
}
