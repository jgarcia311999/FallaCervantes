export interface Evento {
    
    titulo: string;
    descripcion: string;
}

export default interface NuevoEvento {
    
    id?: string; 
    date: string;
    textColor: string;
    backgroundColor: string;
    eventos: Evento[];
}