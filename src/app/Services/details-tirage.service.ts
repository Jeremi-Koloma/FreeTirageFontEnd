import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsTirageService {

  constructor(private http:HttpClient) { }
  
  getShortList(): Observable<object>{
    return this.http.get('http://localhost:8080/shortList/read')
  }
}
