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
    {
      id: 1, name: 'La nostra fallera major',
      image: '../../assets/images/fallera.webp'
    },
    {
      id: 2, name: 'El nostre president',
      image: '../../assets/images/presidente.webp'
    },
    {
      id: 3, name: 'La nostra fallera major infantil',
      image: '../../assets/images/falleraInfantil.webp'
    },
    {
      id: 4, name: 'El nostre president infantil',
      image: '../../assets/images/presidenteInfantil.webp'
    },
    {
      id: 5, name: 'La nostra falla gran',
      image: '../../assets/images/fallaGrande2.jpg'
    },
    {
      id: 6, name: 'La nostra falla infantil',
      image: '../../assets/images/fallaPeqquenya2.jpg'
    }
  ];

}