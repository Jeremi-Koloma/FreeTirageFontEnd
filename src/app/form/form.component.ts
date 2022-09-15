import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  obs!:Observable<tirage[]>;
 constructor( public serv:ServicetirService,public routeur:ActivatedRoute) { }

 ngOnInit(): void {
   this.id=this.routeur.snapshot.params['id']
   console.log(this.id)
   // this.routeur.queryParams.subscribe((params:any)=>{
   //   console.log(params.data)
   //   this.name=params.data
   // })
   this.g=new tirage(this.id,this.date,this.lib)
   
   this.obs=this.serv.getToutesListe(this.id)
   
 }
 on(){
  
   // this.obs.subscribe(valu=>console.log(valu))
 }



}
