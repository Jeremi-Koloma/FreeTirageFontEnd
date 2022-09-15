import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postulant } from './postulant';
import { short } from './short';
import { tirage } from './tirage';

@Injectable({
  providedIn: 'root'
})
export class ServicetirService {

 d:any
    constructor(private http:HttpClient){}
    getpostulant(st:String){
        this.d=this.http.get<String>(`http://localhost:8080/control/api/${st}`).subscribe(VALU=>{
            return VALU;
        });
    }
    tout():Observable<postulant[]>{
        return this.http.get<postulant[]>('http://localhost:8080/listePostulant/read');
    }
    modifier(id:number,post:postulant):Observable<postulant>{
        return this.http.put<postulant>(`http://localhost:8080/listePostulant/update/${id}`,post);
    }
    getToutesListe(ide?:number):Observable<tirage[]>
    {
      return this.http.get<tirage[]>(`http://localhost:8080/tirage/reaf/${ide}`);
    }
    getToutes(ida:number):Observable<any>
    {
      return this.http.get(`http://localhost:8080/tirage/vrai/${ida}`)  
    }
    toutpost():Observable<number>{
      return this.http.get<number>('http://localhost:8080/listePostulant/conter')  
    }
    touttirage():Observable<number>{
      return this.http.get<number>('http://localhost:8080/tirage/cont')  
    }
    modif(id:number):Observable<short>{
      return this.http.get<short>(`http://localhost:8080/shortList/create/${id}`);
  }


}
