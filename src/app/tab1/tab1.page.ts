import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemId: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemId = +params['id'];
      // Ahora puedes usar this.itemId para mostrar información específica según la tarjeta seleccionada
      console.log('ID de la tarjeta seleccionada:', this.itemId);
    });
  }

  cards = [
    { id: 1, name: 'La nostra fallera major' },
    { id: 2, name: 'El nostre president' },
    { id: 3, name: 'La nostra fallera major infantil' },
    { id: 4, name: 'El nostre president infantil' }
  ];

}