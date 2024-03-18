import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarUserPage } from './registrar-user.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarUserPageRoutingModule {}
