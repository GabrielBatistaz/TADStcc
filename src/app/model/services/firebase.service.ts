import { Inject, Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mercadoria } from '../entities/Mercadoria';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH : string = "mercadorias";
  user : any;

  constructor(private firestore : AngularFirestore,
   @Inject(Injector) private readonly injector : Injector,
    private storage : AngularFireStorage) { }

    private injectAuthService(){
     return this.injector.get(AuthService);
    }

  buscarTodos(){
    this.user = this.injectAuthService().getUsuarioLogado();
    return this.firestore.collection(this.PATH,
       ref => ref.where('uid','==', this.user.uid)).snapshotChanges();
  }

  cadastrar(mercadoria: Mercadoria){
    return this.firestore.collection(this.PATH)
    .add({nome : mercadoria.nome, descricao: mercadoria.descricao,
    preco: mercadoria.preco, genero : mercadoria.genero,
    downloadURL : mercadoria.downloadURL, uid : mercadoria.uid});
  }

  editar(mercadoria: Mercadoria, id : string){
    return this.firestore.collection(this.PATH).doc(id)
    .update({nome : mercadoria.nome, descricao: mercadoria.descricao,
      preco: mercadoria.preco, genero : mercadoria.genero,
      downloadURL : mercadoria.downloadURL, uid : mercadoria.uid});
  }


  excluir(id: string){
    return this.firestore.collection(this.PATH).doc(id)
    .delete();
  }

  uploadImage(imagem: any, mercadoria: Mercadoria){
    const file = imagem.item(0);
    if(file.type.split('/')[0] !== 'image'){
      console.error("Tipo Não Suportado");
      return;
    }
    const path = `images/${mercadoria.nome}_${file.name}`;
    const fileRef = this.storage.ref(path);
    let task = this.storage.upload(path,file);
    task.snapshotChanges().pipe(
      finalize(()=>{
        let uploadFileURL = fileRef.getDownloadURL();
        uploadFileURL.subscribe(resp => {
          mercadoria.downloadURL = resp;
          if(!mercadoria.id){
            this.cadastrar(mercadoria);
          }else{
            this.editar(mercadoria, mercadoria.id);
          }
        })
      })
    ).subscribe();
    return task;
  }

}
