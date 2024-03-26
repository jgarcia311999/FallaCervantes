// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
// Importa aquí otros componentes, directivas o pipes que desees agregar

@NgModule({
    declarations: [
        // Agrega aquí otros componentes, directivas o pipes
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // Exporta aquí otros componentes, directivas o pipes
    ]
})
export class SharedModule { }
