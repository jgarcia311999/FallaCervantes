import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../servicios/avisos.service';
import Aviso from '../interfaces/avisos.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  tarjetaSeleccionada: number | null | undefined;
  avisosFalla: Aviso[] = [];
  avisos: string[] = [];
  constructor(private avisoService: AvisosService) { }
  ngOnInit(): void {
    this.avisoService.getNotifications().subscribe(avisos => {
      this.avisosFalla = avisos;
    });
  }
}

