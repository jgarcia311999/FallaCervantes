import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {
  itemId: number | undefined;
  items: any[] = [
    { 
      id: 1, 
      title: 'La nostra fallera major', 
      text: 'Coneix a la nostra fallera major, la representant principal de la nostra comissió fallera. Descobreix la seua història, els seus èxits i el seu compromís amb les nostres tradicions.' 
    },
    { id: 2, 
      title: 'El nostre president', 
      text: 'Descobreix qui lidera la nostra comissió fallera com a president. Coneix els seus objectius, la seua visió de futur i com treballa per fer realitat les il·lusions de tots nosaltres.' 
    },
    { id: 3, 
      title: 'La nostra fallera major infantil', 
      text: 'Coneix a la nostra fallera major infantil, la jove que representa l alegria i l energia de la nostra comissió fallera. Descobreix les seues activitats, la seua creativitat i com contagia el seu entusiasme.' 
    },
    { id: 4, 
      title: 'El nostre president infantil', 
      text: 'Coneix al líder més jove de la nostra comissió fallera, el nostre president infantil. Descobreix com inspira als més menuts, el seu paper en les nostres activitats i com porta endavant la diversió i la camaraderia.' 
    }

  ];

  title: string | undefined;
  text: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemId = +params['id'];
      this.loadInfo(this.itemId);
    });
  }

  loadInfo(itemId: number) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      this.title = item.title;
      this.text = item.text;
    } else {
      this.title = 'Información no encontrada';
      this.text = 'Lo sentimos, la información no está disponible...';
    }
  }
}