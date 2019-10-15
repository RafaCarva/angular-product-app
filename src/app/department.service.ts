import { Injectable } from '@angular/core';
import { Department } from './models/departments.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Eletronics' },
    { id: 4, name: 'Computers' }
  ];

  private nextID: number = 5;

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  /*
    'd' vai ser: { name: "nomeDoDepartamento" }
    a sintaxe "...d" diz que 'd' vai ser adicionado nesse objeto:
    {id: this.nextID++, ...d} ficará:
    {id: 5, nome: "meuNovoDepartamento"}
  */
  addDepartments(d: Department) {
    this.departments.push({id: this.nextID++, ...d});
    console.log(this.departments);
  }

  // o triplo '=' é a sugestão do tslint
  getDepartmentById(id: number): Department {
    return this.departments.find( (d) => d.id === id );
  }

}
