export class postulant{
    idListePostulant:number;
    date:Date;
    libelle:String;
    tirages!:Object;
    constructor(id:number,date:Date,mail:String,tirages:Object){
        this.idListePostulant=id;
        
        this.date=date;
        this.libelle=mail;
        this.tirages=tirages
        
    }
}
