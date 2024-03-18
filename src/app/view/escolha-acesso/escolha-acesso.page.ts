import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolha-acesso',
  templateUrl: './escolha-acesso.page.html',
  styleUrls: ['./escolha-acesso.page.scss'],
})
export class EscolhaAcessoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  irParaLogarUsuario(){
    this.router.navigate(["/logar-user"]);
  }
  irParaLogarMercado(){
    this.router.navigate(["/logar"]);
  }
}
