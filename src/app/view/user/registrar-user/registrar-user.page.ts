import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/common/alert';
import { AuthService } from 'src/app/model/services/auth.service';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.page.html',
  styleUrls: ['./registrar-user.page.scss'],
})
export class RegistrarUserPage implements OnInit {
  cadastrouser!: FormGroup;

  constructor(private router: Router,
    private auth : AuthService,
     private alert : Alert,
     private builder: FormBuilder) {
       this.cadastrouser = new FormGroup({
         email: new FormControl(''),
         senha: new FormControl(''),
         confSenha: new FormControl('')
       });
      }

  ngOnInit() {
    this.cadastrouser = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confSenha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl(){
    return this.cadastrouser.controls;
  }

  submitForm(){
    if(!this.cadastrouser.valid){
      this.alert.presentAlert("OK", "Erro ao Logar!");
    }else{
      this.registraruser();

    }
 }

  private registraruser(){
        this.auth.registraruser(this.cadastrouser.value['email'],this.cadastrouser.value['senha'])
        .then((res)=>{
          this.alert.presentAlert("OK", "Seja bem Vindo!");
          this.router.navigate(['/logar-user']);})
        .catch((error) => {
          this.alert.presentAlert("Erro", "Erro ao cadastrar!");
          console.log(error);
        })
      }
}