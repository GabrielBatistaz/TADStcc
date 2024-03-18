import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolhaAcessoPageRoutingModule } from './escolha-acesso-routing.module';

import { EscolhaAcessoPage } from './escolha-acesso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolhaAcessoPageRoutingModule
  ],
  declarations: [EscolhaAcessoPage]
})
export class EscolhaAcessoPageModule {}
