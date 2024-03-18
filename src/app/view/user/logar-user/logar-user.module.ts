import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogarUserPageRoutingModule } from './logar-user-routing.module';

import { LogarUserPage } from './logar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LogarUserPageRoutingModule
  ],
  declarations: [LogarUserPage]
})
export class LogarUserPageModule {}
