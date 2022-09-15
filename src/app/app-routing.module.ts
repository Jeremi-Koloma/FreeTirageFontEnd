import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import {DoTirageComponent } from './do-tirage/do-tirage.component';
import { FormComponent } from './form/form.component';
import { ImportFileComponent } from './import-file/import-file.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { TirageComponent } from './tirage/tirage.component';


const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'tirage',component:TirageComponent},
  {path:'do-tirage', component:DoTirageComponent},
  {path:'detail-tirage', component:DetailsTirageComponent},
  {path:'tirages/:id', component:FormComponent},
  {path:'shortlist/:id', component:ShortlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
