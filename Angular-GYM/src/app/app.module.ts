import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown';

import "leaflet/dist/images/marker-shadow.png";

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';



import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';




import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { EquipmentIndexComponent } from './equipment/equipment-index/equipment-index.component';
import { EquipmentFormComponent } from './equipment/equipment-form/equipment-form.component';
import { EquipmentCreateComponent } from './equipment/equipment-create/equipment-create.component';
import { EquipmentEditComponent } from './equipment/equipment-edit/equipment-edit.component';


@NgModule({
  declarations: [
    AppComponent,

    GenericListComponent,
    MenuComponent,
  
    HomeComponent,
  

 

    InputImgComponent,
    InputMarkdownComponent,
 

   
    DisplayErrorsComponent,
 

   
    EquipmentIndexComponent,
 

   
    EquipmentFormComponent,
 

   
    EquipmentCreateComponent,
 

   
    EquipmentEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
 
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
