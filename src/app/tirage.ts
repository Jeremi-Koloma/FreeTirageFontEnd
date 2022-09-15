export class tirage{
    idTirage!:number;
    date!:Date;
    libelle!:String;
    constructor(id:number,date:Date,mail:String){
        this.idTirage=id;
        
        this.date=date;
        this.libelle=mail;
        
    }
}
