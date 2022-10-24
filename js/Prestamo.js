class Prestamo{
    id
    Libro
    Persona
    fechaPrestamo
    fechaDevolucion

    static prestamos = []
    static ultimoID = 1;
    
    constructor(Libro, Persona){
        this.id = 0;
        this.Libro = Libro;
        this.Persona = Persona;
        this.fechaPrestamo = new Date();
        this.fechaDevolucion = null;

       this.Libro.prestado = Libro.prestado + 1;
    }

    get estado(){
        if(this.fechaDevolucion == null)
            return "Prestado";
        else
            return "Devuelto";
    }

    static buscar(id){
        return Prestamo.prestamos.find(b => b.id == id);
    }

    static agregar (prestamo){
        prestamo.id = Prestamo.ultimoID;
        Prestamo.prestamos.push(prestamo);
        Prestamo.ultimoID++;
        return true
    }

    devolver(){
        if(this.fechaDevolucion == null){
            this.fechaDevolucion = new Date();
        this.Libro.prestado = this.Libro.prestado - 1;
        }
    }
}