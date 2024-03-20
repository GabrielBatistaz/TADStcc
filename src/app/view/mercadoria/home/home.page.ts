import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Mercadoria } from 'src/app/model/entities/Mercadoria';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaDeMercadorias : Mercadoria[] = [];

  constructor(private alertController: AlertController,
    private router : Router,
    private auth: AuthService,
    private firebase : FirebaseService) {
      console.log(this.auth.getUsuarioLogado());
      this.firebase.buscarTodos()
      .subscribe(res => {
        this.listaDeMercadorias= res.map(mercadoria => {
          return{
            id: mercadoria.payload.doc.id,
            ...mercadoria.payload.doc.data() as any
          }as Mercadoria
        })
      })
    }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(mercadoria :  Mercadoria){
    this.router.navigateByUrl("/detalhar", {state : { mercadoria: mercadoria}});
  }
}
