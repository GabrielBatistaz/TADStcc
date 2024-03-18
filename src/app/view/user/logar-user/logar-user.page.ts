import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/common/alert';
import { AuthService } from 'src/app/model/services/auth.service';

@Component({
  selector: 'app-logar-user',
  templateUrl: './logar-user.page.html',
  styleUrls: ['./logar-user.page.scss'],
})
export class LogarUserPage implements OnInit {
  logar!: FormGroup;


  constructor(private router: Router,
    private alert : Alert,
    private auth: AuthService,
    private builder: FormBuilder) {
      this.logar = new FormGroup({
        email: new FormControl(''),
        senha: new FormControl('')
      });
     }

  ngOnInit() {
    this.logar = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl(){
    return this.logar.controls;
  }

  submitForm(){
    if(!this.logar.valid){
      this.alert.presentAlert("OK", "Erro ao Logar!");
    }else{
      this.login();
    }
  }

  private login(){
    this.auth.logar(this.logar.value['email'], this.logar.value['senha'])
    .then((res)=>{
      this.alert.presentAlert("OK", "Seja bem Vindo!");
      this.router.navigate(['home-user']); })
    .catch((error)=>{
      this.alert.presentAlert("OK", "Erro ao Logar! Tente Novamente");
      console.log(error); })
  }

  logarComGmail(){
    this.auth.logarComGoogle()
    .then((res)=>{
      this.alert.presentAlert("OK", "Seja bem Vindo!");
      this.router.navigate(['home']); })
    .catch((error)=>{
      this.alert.presentAlert("OK", "Erro ao Logar! Tente Novamente");
      console.log(error); })
  }

  irParaRegistrarUser(){
    this.router.navigate(["/registrar-user"]);
  }

}

