import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirageclasse } from '../Classes/tirageclasse';
import { postulant } from '../postulant';
import { TirageserviceService } from '../Services/tirageservice.service';
import { ServicetirService } from '../servicetir.service';

@Component({
  selector: 'app-do-tirage',
  templateUrl: './do-tirage.component.html',
  styleUrls: ['./do-tirage.component.css']
})
export class DoTirageComponent implements OnInit {
  // Boby
 date!:Date
 lib!:String
 tir!:Tirageclasse
 ob!:Observable<postulant[]>
 nu!:postulant
// path varible
 liblist!: String
 nbrlist!: number
 obs!:Observable<String>;

  constructor(private serv:TirageserviceService,public serve:ServicetirService) { }

  ngOnInit(): void {
   this.ob=this.serve.tout()
     
  }
  onclickTirage(){
    this.tir=new Tirageclasse(this.lib,this.date)
    this.obs=this.serv.postTirage(this.liblist,this.nbrlist,this.tir)
    this.obs.subscribe(valu=>console.log(valu))
  }

}
