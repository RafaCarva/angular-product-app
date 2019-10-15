import { DepartmentService } from './department.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    { id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Some laptop intel.' },
    { id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Some Shirt la coste.' },
    { id: 3, name: 'Polo', department_id: 1, price: 50, description: 'Some Polo.' },
    { id: 4, name: 'Mouse', department_id: 3, price: 40, description: 'Some Mouse razor.' },
  ];
  private products: Product[] = [];
  private  nextID: number;
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService) {
    for (let p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.department_id)
      });
      this.nextID = p.id + 1;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    const prod: Product = { id: this.nextID++, ...p };
    this.products.push(prod);
    console.log(this.products);
    // O subscribe desse emit está em product-table.component.ts
    this.onNewProduct.emit(prod);
  }

}
