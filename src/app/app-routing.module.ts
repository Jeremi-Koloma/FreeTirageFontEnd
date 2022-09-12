import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import {DoTirageComponent } from './do-tirage/do-tirage.component';
import { ImportFileComponent } from './import-file/import-file.component';
import { TirageComponent } from './tirage/tirage.component';


const routes: Routes = [
  {path:'', component:TirageComponent},
  {path:'do-tirage', component:DoTirageComponent},
  {path:'detail-tirage', component:DetailsTirageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
