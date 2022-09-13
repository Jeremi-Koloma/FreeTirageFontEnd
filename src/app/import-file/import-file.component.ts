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
  
  constructor(private formBuilder:FormBuilder, private route: Router){ }
 

  ngOnInit(): void {
    
     // Validation;
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
    alert("Success");
    this.route.navigateByUrl("/do-tirage");
  }

}
