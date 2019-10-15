import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departament-form',
  templateUrl: './departament-form.component.html',
  styleUrls: ['./departament-form.component.css']
})
export class DepartamentFormComponent implements OnInit {

  depName: string;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
  }

  save() {
    this.departmentService.addDepartments({ name: this.depName });
    this.clear();
  }

  clear() {
    this.depName = "";
  }

}
