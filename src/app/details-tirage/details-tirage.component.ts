import { Component, OnInit } from '@angular/core';
import { DetailsTirageService } from '../Services/details-tirage.service';

@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.css']
})
export class DetailsTirageComponent implements OnInit {
  tirage:any;

  constructor( private service : DetailsTirageService) { }

  ngOnInit(): void {
    this.service.getShortList().subscribe(data=>{
      console.log(data);
      this.tirage= data;
    });
  }

}
