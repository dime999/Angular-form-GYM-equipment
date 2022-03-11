import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { equipmentCreationDTO, equipmentDTO } from './equipment.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { equal } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }


  private apiURL = environment.apiURL + '/gym'

  getById(id: number): Observable<equipmentDTO> {
    return this.http.get<equipmentDTO>(`${this.apiURL}/${id}`);
  }

  get(): Observable<any>{
  
    
   
    return this.http.get<equipmentDTO[]>(this.apiURL);
  }

  

  create(eq: equipmentCreationDTO){
    const formData = this.buildFormData(eq);
    return this.http.post(this.apiURL, formData);
  }

  edit(id: number, eq: equipmentCreationDTO){
    const formData = this.buildFormData(eq);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }


  private buildFormData(eq: equipmentCreationDTO): FormData {
    const formData = new FormData();
 
    formData.append('name', eq.name);

    if (eq.description){
      formData.append('description', eq.description);
    }

    

    if (eq.picture){
      formData.append('picture', eq.picture);
    }

    return formData;
  }
}
