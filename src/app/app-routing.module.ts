import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/mercadoria/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'logar',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./view/mercadoria/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'detalhar',
    loadChildren: () => import('./view/mercadoria/detalhar/detalhar.module').then( m => m.DetalharPageModule)
  },
  {
    path: 'logar',
    loadChildren: () => import('./view/mercado/logar/logar.module').then( m => m.LogarPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./view/mercado/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'logar-user',
    loadChildren: () => import('./view/user/logar-user/logar-user.module').then( m => m.LogarUserPageModule)
  },
  {
    path: 'registrar-user',
    loadChildren: () => import('./view/user/registrar-user/registrar-user.module').then( m => m.RegistrarUserPageModule)
  },
  {
    path: 'home-user',
    loadChildren: () => import('./view/user/home-user/home-user.module').then( m => m.HomeUserPageModule)
  },
  {
    path: 'escolha-acesso',
    loadChildren: () => import('./view/escolha-acesso/escolha-acesso.module').then( m => m.EscolhaAcessoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
