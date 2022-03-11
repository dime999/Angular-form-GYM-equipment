import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { equipmentCreationDTO, equipmentDTO } from '../equipment.model';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private service: EquipmentService,
    private router: Router) { }

  model: equipmentDTO;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.getById(params.id).subscribe(x => this.model = x);
    });
  }

  saveChanges(equipmentCreationDTO: equipmentCreationDTO){
    console.log(equipmentCreationDTO);
    this.service.edit(this.model.id, equipmentCreationDTO).subscribe(() => {
      this.router.navigate(['/equipment']);
    });
  }
}
