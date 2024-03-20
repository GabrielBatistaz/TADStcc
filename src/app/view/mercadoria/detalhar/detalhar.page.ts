import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Mercadoria } from 'src/app/model/entities/Mercadoria';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  nome! : string;
  preco! : number;
  descricao! : string;
  genero! : number;
  imagem! : any;
  mercadoria! : Mercadoria;
  edicao: boolean = true;
  user : any;


  constructor(private firebase : FirebaseService,
    private alertController: AlertController,
    private auth : AuthService,
    private router: Router) {
      this.user = this.auth.getUsuarioLogado();
    }

  ngOnInit() {
    this.mercadoria = history.state.mercadoria;
    this.nome = this.mercadoria.nome;
    this.preco = this.mercadoria.preco;
    this.descricao = this.mercadoria.descricao;
    this.genero = this.mercadoria.genero;
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  uploadFile(imagem: any){
    this.imagem = imagem.files;
  }

  editar(){
    if(this.nome && this.preco){
      let novo: Mercadoria = new Mercadoria(this.nome, this.preco);
      novo.descricao = this.descricao;
      novo.genero = this.genero;
      novo.id = this.mercadoria.id;
      novo.uid = this.user.uid;
      if(this.imagem){
        this.firebase.uploadImage(this.imagem, novo)
        ?.then(()=>{this.router.navigate(["/home"]);})
      }else{
        novo.downloadURL = this.mercadoria.downloadURL;
        this.firebase.editar(novo, this.mercadoria.id)
        .then(()=>{this.router.navigate(["/home"]);})
        .catch((error)=>{
          console.log(error);
          this.presentAlert("Erro", "Erro ao Atualizar Contato!");
        })
      }
    }else{
      this.presentAlert("Erro", "Nome e Telefone são campos Obrigatórios!");
    }
  }

  excluir(){
    this.presentConfirmAlert("ATENÇÃO", "Deseja realmente excluir o contato?");
  }

  //firebase deploy

  excluirContato(){
    this.firebase.excluir(this.mercadoria.id)
    .then(() => { this.router.navigate(["/home"]);})
    .catch((error)=>{
      console.log(error);
      this.presentAlert("Erro", "Erro ao Excluir Contato!");
    })

  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentConfirmAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: [
        {text: 'Cancelar', role: 'cancelar', handler: ()=>{console.log("cancelou")}},
        {text: 'Confirmar', role: 'confirmar', handler: (acao)=>{this.excluirContato()}}
      ],
    });
    await alert.present();
  }



}
