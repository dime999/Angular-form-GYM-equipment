import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipmentCreationDTO } from '../equipment.model';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipment-create.component.html',
  styleUrls: ['./equipment-create.component.css']
})
export class EquipmentCreateComponent implements OnInit {

  constructor(private service: EquipmentService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(eq: equipmentCreationDTO){
    this.service.create(eq).subscribe(() => {
      this.router.navigate(['/equipment']);
    });
  }

}
