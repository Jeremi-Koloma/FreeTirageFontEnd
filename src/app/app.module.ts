import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContenuComponent } from './contenu/contenu.component';
import { ImportFileComponent } from './import-file/import-file.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FooterComponent } from './footer/footer.component';
import { TirageComponent } from './tirage/tirage.component';
import { DoTirageComponent } from './do-tirage/do-tirage.component';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms'
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { FormComponent } from './form/form.component';
import { ShortlistComponent } from './shortlist/shortlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenuComponent,
    ImportFileComponent,
    CardItemComponent,
    FooterComponent,
    TirageComponent,
    DoTirageComponent,
    DetailsTirageComponent,
    AccueilComponent,
    FormComponent,
    ShortlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
