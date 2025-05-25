document.addEventListener("DOMContentLoaded", function (event) {
    // definir la funcion para mostrar la hora en onload se hace en el html asi: <body onload="mostrarHora()">
    function mostrarHoraYFecha() {
        let fecha = new Date();
        let hora = fecha.getHours(); 
        let minutos = fecha.getMinutes();
        let ampm = hora >= 12 ? "pm" : "am"; 
        hora = hora % 12; 
        hora = hora ? hora : 12; ; 
        let horaActual = hora + ":" + minutos + " " + ampm;
        
        // Obtener información de la fecha
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        const diaSemana = diasSemana[fecha.getDay()];
        const diaMes = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const fechaActual = `${diaSemana}, ${diaMes} de ${mes}`;
        document.getElementById("horaActual").innerHTML = horaActual; 
        document.getElementById("fechaActual").innerHTML = fechaActual;
    }

    setInterval(mostrarHoraYFecha, 1000); 
    const redirigirALogin = () => {
        paginaDesbloqueo.style.filter = 'blur(10px)'; 
        setTimeout(() => {
            window.location.href = 'resources/html/login.html';
        }, 500); 
    };

    // Event listener para las teclas "Espacio" y "Enter"
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            redirigirALogin();
        }
    });
})
