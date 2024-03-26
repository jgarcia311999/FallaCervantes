// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
// Importa aquí otros componentes, directivas o pipes que desees agregar

@NgModule({
    declarations: [
        CabeceraComponent,
        // Agrega aquí otros componentes, directivas o pipes
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CabeceraComponent,
        // Exporta aquí otros componentes, directivas o pipes
    ]
})
export class SharedModule { }
