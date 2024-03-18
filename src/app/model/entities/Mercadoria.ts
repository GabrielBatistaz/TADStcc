export class Mercadoria{
 private _id!: string;
 private _nome: string;
 private _preco: number;
 private _descricao!: string;
 private _genero!: number;
 private _downloadURL : any;
 private _uid! : string;

 constructor(nome : string, preco: number){
  this._nome = nome;
  this._preco = preco;
 }

 public get id(): string {
  return this._id;
}
public set id(value: string) {
  this._id = value;
}


 public get nome() : string{
  return this._nome;
 }

 public set nome(nome: string){
  this._nome = nome;
 }

 public get preco() : number{
  return this._preco;
 }

 public set preco(preco: number){
  this._preco = preco;
 }

 public get descricao(): string {
  return this._descricao;
}
public set descricao(value: string) {
  this._descricao= value;
}

public get genero(): number {
  return this._genero;
}
public set genero(value: number) {
  this._genero = value;
}

public get downloadURL() : any{
  return this._downloadURL;
}

public set downloadURL(value: any){
  this._downloadURL = value;
}

public get uid(): string {
  return this._uid;
}
public set uid(value: string) {
  this._uid = value;
}


}
