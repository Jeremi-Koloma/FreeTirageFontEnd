import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirageclasse } from '../Classes/tirageclasse';
import { TirageserviceService } from '../Services/tirageservice.service';

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

// path varible
 liblist!: String
 nbrlist!: number
 obs!:Observable<String>;

  constructor(private serv:TirageserviceService) { }

  ngOnInit(): void {

  }
  onclickTirage(){
    this.tir=new Tirageclasse(this.lib,this.date)
    this.obs=this.serv.postTirage(this.liblist,this.nbrlist,this.tir)
    this.obs.subscribe(valu=>console.log(valu))
  }

}
