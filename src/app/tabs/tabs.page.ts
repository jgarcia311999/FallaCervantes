import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  selectedTab: string = 'tab1'; // Inicialmente selecciona la pestaña 1

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener la URL actual
    const currentUrl = window.location.href;

    // Determinar qué pestaña debería estar activa basada en la URL actual
    if (currentUrl.includes('tab2')) {
      this.selectedTab = 'tab2';
    } else if (currentUrl.includes('tab3')) {
      this.selectedTab = 'tab3';
    } else if (currentUrl.includes('tab4')) {
      this.selectedTab = 'tab4';
    }
  }

  // Método para cambiar la pestaña activa
  changeTab(tab: string) {
    this.selectedTab = tab;
  }
}
