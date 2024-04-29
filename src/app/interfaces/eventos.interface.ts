interface Evento {
    titulo: string;
    descripcion: string;
}

export default interface NuevoEvento {
    date: string;
    textColor: string;
    backgroundColor: string;
    eventos: Evento[];
}