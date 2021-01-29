let myCanvas = document.getElementById("graffic_id").getContext("2d");

var chart = new Chart(myCanvas,{
	type: "line",
	data: {
		labels: ["Enero", "Febrero", "Marzo", "Abril", 
		"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
	
		datasets: [
			{
			label: "Horas de estudio durante el 2020",
			backgroundColor: "rgb(34,13,218)",
			data: ["137", "132", "113", "123", "112", "80", "89", "69", "80", "90", "91", "75"]
			}
		]

	}
});