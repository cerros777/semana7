class Prestamo{
    Libro
    Persona
    fechaPrestamo
    fechaDevolucion

    static prestamos = []
    
    constructor(Libro, Persona){
        this.Libro = Libro;
        this.Persona = Persona;
        this.fechaPrestamo = new Date();
        this.fechaDevolucion = null;

       this.Libro.prestado = Libro.prestado + 1;
    }

    get estado(){
        if(this.fechaDevolucion == null)
            return "prestado";
        else
            return "devuelto";
    }

    static agregar (prestamo){
        Prestamo.prestamos.push(prestamo);
        return true
    }

    devolver(){
        if(this.fechaDevolucion == null){
            this.fechaDevolucion == new Date();
        this.Libro.prestado = this.Libro.prestado - 1;
        }
    }
}