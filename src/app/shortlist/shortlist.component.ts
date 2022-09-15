import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicetirService } from '../servicetir.service';
import { short } from '../short';


@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css']
})
export class ShortlistComponent implements OnInit {
  id!:number
  os!:Observable<short>

  constructor(public routeur:ActivatedRoute,public serv:ServicetirService ) { }

  ngOnInit(): void {
    this.id=this.routeur.snapshot.params['id']
    this.os=this.serv.modif(this.id)
  }

}
