export class short{
    idShortList!:number
    nom!:String
    prenom!:String
    numero!:String
    email!:String
    

   
    constructor(id:number,nom:String,prenom:String,num:String,mail:String){
      this.idShortList=id
     this.nom=nom
     this.prenom=prenom
     this.numero=num
     this.email=mail
        
    }
}