import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogarUserPage } from './logar-user.page';

const routes: Routes = [
  {
    path: '',
    component: LogarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogarUserPageRoutingModule {}
