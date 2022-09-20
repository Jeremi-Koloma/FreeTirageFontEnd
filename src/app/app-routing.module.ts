import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import {DoTirageComponent } from './do-tirage/do-tirage.component';
import { FormComponent } from './form/form.component';
import { ImportFileComponent } from './import-file/import-file.component';
import { MenuComponent } from './menu/menu.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { TirageComponent } from './tirage/tirage.component';


const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'do-tirage', component:DoTirageComponent},
  {path:'detail-tirage', component:DetailsTirageComponent},
  {path:'tirages/:id', component:FormComponent},
  {path:'shortlist/:id', component:ShortlistComponent},
  {path:'page-accueil', component:AccueilComponent},
  {path:'page-tirage', component:TirageComponent},
  {path:'page-details',component:DetailsTirageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
