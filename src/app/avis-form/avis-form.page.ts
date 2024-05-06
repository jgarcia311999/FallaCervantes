import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../servicios/avisos.service';

@Component({
  selector: 'app-avis-form',
  templateUrl: './avis-form.page.html',
  styleUrls: ['./avis-form.page.scss'],
})
export class AvisFormPage implements OnInit {

  titulo: string | undefined;

  constructor(private avisosService: AvisosService) { }
  ngOnInit(): void {
  }

  async guardarAviso() {
    if (!this.titulo) {
      console.error('Error: Título del aviso es obligatorio');
      return;
    }

    try {
      const response = await this.avisosService.addNotification({ titulo: this.titulo });
      console.log('Aviso guardado:', response);
    } catch (error) {
      console.error('Error al guardar el aviso:', error);
    }
  }

}
