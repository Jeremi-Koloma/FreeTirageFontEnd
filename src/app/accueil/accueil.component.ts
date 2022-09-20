import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { postulant } from '../postulant';
import { ServicetirService } from '../servicetir.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  a!:any
  name:any
  obs!:any
  url = "/test"
  liste:any
  ad!:number
  nbreT!:Observable<number>
  nbreL!:Observable<number>
  @Input() postu!:postulant;

  constructor(public serv:ServicetirService ,
    private routeur:Router) { }

  ngOnInit(): void {
    this.serv.tout().subscribe(data=>{
      this.obs=data;
      console.log(this.obs)
      console.log(data)

    });
    this.nbreT=this.serv.touttirage()
    this.nbreL=this.serv.toutpost()

  }

  onit(){
    console.log("bonjour le monde");
    this.serv.getToutesListe().subscribe(data=>{
      this.liste=data;
      // this.tirage=data;
      
    });
  }
  partont(){
    this.routeur.navigate(['/test'],{queryParams:{data:this.name}})
  }


  compte(id:number){
    var nombre=0;
    this.serv.getToutes(id).subscribe(data=>{
      console.log(data)
      nombre= data;
    })
    return nombre;
  }


}
