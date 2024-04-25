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
    { id: 1, title: 'Información de la tarjeta 1', text: 'Texto relacionado con la tarjeta 1...' },
    { id: 2, title: 'Información de la tarjeta 2', text: 'Texto relacionado con la tarjeta 2...' },
    { id: 3, title: 'Información de la tarjeta 3', text: 'Texto relacionado con la tarjeta 3...' },
    { id: 4, title: 'Información de la tarjeta 4', text: 'Texto relacionado con la tarjeta 4...' }
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