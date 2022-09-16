import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TirageserviceService } from '../Services/tirageservice.service';
import { ServicetirService } from '../servicetir.service';
import { tirage } from '../tirage';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  post!:number
  name:any
  id!:any;
  date!:Date
  lib!:String
  g!:tirage
  NombrePost:any;
  obs!:Observable<tirage[]>;
 constructor( public serv:ServicetirService,public routeur:ActivatedRoute,private route:Router, private service : TirageserviceService ) { }

 ngOnInit(): void {
   this.id=this.routeur.snapshot.params['id']
   console.log(this.id)
   this.g=new tirage(this.id,this.date,this.lib)
   this.obs=this.serv.getToutesListe(this.id)
   this.service.getNombreP().subscribe(data=>{
    this.NombrePost=data;
    console.log(data);
  })
 }
 on(){

 }



}
