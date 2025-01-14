import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesPageRoutingModule } from './opciones-routing.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


import { OpcionesPage } from './opciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesPageRoutingModule,
    NgxQRCodeModule

  ],
  declarations: [OpcionesPage]
})
export class OpcionesPageModule {}
