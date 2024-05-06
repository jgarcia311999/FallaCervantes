export interface Evento {
    
    titulo: string;
    descripcion: string;
}

export default interface NuevoEvento {
    
    id?: string;  // Agregar esta línea para representar el ID opcional
    date: string;
    textColor: string;
    backgroundColor: string;
    eventos: Evento[];
}