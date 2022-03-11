import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentCreateComponent } from './equipment/equipment-create/equipment-create.component';
import { EquipmentEditComponent } from './equipment/equipment-edit/equipment-edit.component';
import { EquipmentIndexComponent } from './equipment/equipment-index/equipment-index.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {path: 'equipment', component: EquipmentIndexComponent},
  {path: 'equipment/create', component: EquipmentCreateComponent},
  {path: 'equipment/edit/:id', component: EquipmentEditComponent},
 

  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
