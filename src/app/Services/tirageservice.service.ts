import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirageclasse } from '../Classes/tirageclasse';

@Injectable({
  providedIn: 'root'
})
export class TirageserviceService {

  // On implemente http:HttpClient;
  constructor(private http:HttpClient) { }

  postTirage(libelleliste: String, nombre:number, tir:Tirageclasse):Observable<String>{
    return this.http.post<String>(`http://localhost:8080/tirage/createTirage/${libelleliste}/${nombre}`,tir)
  }


}
