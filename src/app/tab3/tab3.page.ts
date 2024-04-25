import { Component } from '@angular/core';
interface Aviso {
  titulo: string;
  descripcion: string;
  img?: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  tarjetaSeleccionada: number | null | undefined;
  
  constructor() { }
  avisosFalla: Aviso[] = [
    {
      titulo: 'Inici de les Falles',
      descripcion: 'Les Falles de València comencen el 15 de març! Prepara t per a gaudir dels castells de focs artificials, la música i la festa pels carrers.',
      img: "."
    },
    {
      titulo: 'Us recordem que és el nostre 50 ANIVERSARI!!!',
      descripcion: 'Vine a celebrar-ho amb nosaltres!!!!.',
      img: "../assets/images/50aniversari.jpg"
    },
    {
      titulo: 'Consells de Seguretat',
      descripcion: 'Mantén la seguretat durant les Falles. Evita portar bosses grans i presta atenció a les teues pertinences en tot moment.',
      img: "."
    },
    {
      titulo: 'Exposició del Ninot',
      descripcion: 'Visita l Exposició del Ninot en el Museu de les Ciències fins al 15 de març.Vota pel teu ninot preferit per a salvar- lo de les flames.',
      img: "."
    },
{
  titulo: 'Tancament de les Falles',
    descripcion: 'La Cremà ocorre el 19 de març. Experimenta la cremada dels ninots i el final espectacular de les festivitats.',
      img: "."
}
  ];


  seleccionarTarjeta(index: number): void {
    this.tarjetaSeleccionada = index; 
  }
}