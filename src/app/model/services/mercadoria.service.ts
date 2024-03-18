import { Injectable } from '@angular/core';
import { Mercadoria } from '../entities/Mercadoria';


@Injectable({
  providedIn: 'root'
})
export class MercadoriaService {
  public listaDeMercadorias : Mercadoria[] = [];

  constructor() {
    
   }

   cadastrar(Mercadoria : Mercadoria){
    this.listaDeMercadorias.push(Mercadoria);
   }

   obterTodos() : Mercadoria[]{
    return this.listaDeMercadorias;
   }

   obterPorIndice(indice : number) : Mercadoria{
    return this.listaDeMercadorias[indice];
   }

   atualizar(indice : number, novo : Mercadoria){
    this.listaDeMercadorias[indice] = novo;
   }

   deletar(indice : number){
    this.listaDeMercadorias.splice(indice, 1);
   }

}
