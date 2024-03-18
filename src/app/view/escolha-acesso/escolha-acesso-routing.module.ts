import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhaAcessoPage } from './escolha-acesso.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaAcessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolhaAcessoPageRoutingModule {}
