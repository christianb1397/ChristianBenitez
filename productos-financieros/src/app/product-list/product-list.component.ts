import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductInterface } from 'src/interfaces/product.interface';


@Component({
  selector: 'product-list',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html',

})
export class ProductListComponent implements AfterViewInit {

  displayedColumns: string[] = ['logo', 'name', 'description', 'date_release', 'date_revision', 'icon'];
  dataSource = new MatTableDataSource<ProductInterface>(PRODUCTS);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const PRODUCTS: ProductInterface[] = [
  {id: 'uno', name: 'Cuenta de Ahorros', description: 'Cuenta de Ahorros Normal', logo: ':)', date_release:new Date('2025/01/01'),date_revision:new Date('2025/01/01'), icon: 'delete'},
  {id: 'dos', name: 'Cuenta Corrientes', description: 'Cuentas Corrientes', logo: ':)', date_release:new Date('2025/01/01'),date_revision:new Date('2025/01/01'), icon: 'delete'},
  {id: 'tres', name: 'Cuenta de Ahorros', description: 'Cuenta de Ahorros Programado', logo: ':)', date_release:new Date('2025/01/01'),date_revision:new Date('2025/01/01'), icon: 'delete'},
];
