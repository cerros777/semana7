const filasPrestamos = document.querySelector("#filasPrestamos")

function actualizarTablaPrestamo(){
    let tablaPrestamo = "";

    for(let i = 0; i < Prestamo.prestamos.length; i++){
        tablaPrestamo += `<tr><td></td> <td>${Prestamo.prestamos[i].Libro.titulo}</td> <td>${Prestamo.prestamos[i].Persona.nombreCompleto}</td> <td>${Prestamo.prestamos[i].fechaPrestamo}</td> <td>${Prestamo.prestamos[i].fechaDevolucion}</td></tr>`
    }
   
    filasPrestamos.innerHTML = tablaPrestamo;
}

actualizarTablaPrestamo();
