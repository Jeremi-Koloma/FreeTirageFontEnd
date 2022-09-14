import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})
export class ImportFileComponent implements OnInit {

  registerForm !: FormGroup; 
  submitted = false;
  libelle!: string

  
  
  constructor(private _http:HttpClient, private formBuilder:FormBuilder, private route: Router){ }
 

  ngOnInit(): void {
    
     // ---------------------- Si les Champs sont vides --------- //
     this.registerForm = this.formBuilder.group({
      nameListe:['',Validators.required],
      addFile:['',Validators.required]
    })
  }


  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return 
    }
    
    alert("Importer avec Succès !");
    this.route.navigateByUrl("/do-tirage");
  }


  // --------------------------- Importation Fichier Excel --------------------//
  
  file:any; 

  selectFile(event:any){ // Selectionner le fichier;
    this.file=event.target.files[0];
  }

  uploadFile(){ // import fichier;
    let fileUploadUrl =`http://localhost:8080/postulant/listePostulant/${this.libelle}`;
    
    let formData= new FormData();
    formData.append("file",this.file);

    this._http.post(fileUploadUrl, formData ).subscribe(
      (data:any)=>{
        // success
        console.log(data); 
        alert(data.message );
      },
      (error)=>{
        // errors;
        console.log(error);
      }
    );
  }
   // ----------------------  FIN Importation Fichier Excels --------- //

 
}
