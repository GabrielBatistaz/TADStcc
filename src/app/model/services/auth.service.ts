import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, browserPopupRedirectResolver,
GoogleAuthProvider} from 'firebase/auth'; // npm i -g firebase --save
import { Mercado } from '../entities/Mercado';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioDados: any;

  constructor(private firebase : FirebaseService,
    private auth : AngularFireAuth,
    private router : Router,
    private ngZone : NgZone) {
      this.auth.authState.subscribe(user =>{
        if(user){
          this.usuarioDados = user;
          localStorage.setItem('user', JSON.stringify(this.usuarioDados));
        }else{
          localStorage.setItem('user', 'null');
        }
      });
     }

     public logar(email: string, password: string){
      return this.auth.signInWithEmailAndPassword(email, password);
     }

     public registrar(email: string, password: string){
      return this.auth.createUserWithEmailAndPassword(email, password);
     }
     public registraruser(email: string, password: string){
      return this.auth.createUserWithEmailAndPassword(email, password);
     }

     public recuperarSenha(email: string){
      return this.auth.sendPasswordResetEmail(email);
     }

     public deslogar(){
      return this.auth.signOut().then(()=>{
        localStorage.removeItem('user');
        this.router.navigate(['logar']);
      })
     }

     public estaLogado() : boolean{
      const user : any = JSON.parse(localStorage.getItem('user') || 'null');
      return (user !== null) ? true : false;
     }

     public getUsuarioLogado(){
      const user : any = JSON.parse(localStorage.getItem('user') || 'null');
      return (user !== null) ? user : null;
     }

     public logarComGoogle(){
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      return signInWithPopup(auth, provider, browserPopupRedirectResolver);
     }

}
