import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equipmentCreationDTO } from '../equipment.model';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: equipmentCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<equipmentCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      description: '',
      picture: '',
     
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(image){
    this.form.get('picture').setValue(image);
  }



  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
}
