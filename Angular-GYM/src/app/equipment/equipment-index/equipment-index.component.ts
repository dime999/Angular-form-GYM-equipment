import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { equipmentDTO } from '../equipment.model';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-equipment-index',
  templateUrl: './equipment-index.component.html',
  styleUrls: ['./equipment-index.component.css']
})
export class EquipmentIndexComponent implements OnInit {

  constructor(private servicec: EquipmentService) { }

  equipment: equipmentDTO[];
  columnsToDisplay = ['name','description','picture','actions'];
 

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.servicec.get().subscribe((x:any) => {
      this.equipment = x;
     
    });
  }

 

  delete(id: number){
    this.servicec.delete(id).subscribe(() => {
      this.loadData();
    });
  }

}
