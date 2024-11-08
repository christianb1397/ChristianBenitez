import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductInterface } from '../../../../be-productos-financieros/src/interfaces/product.interface';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'product-list',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html',

})
export class ProductListComponent implements OnInit {

  PRODUCTS: ProductInterface[] = [];

  readonly dialog = inject(MatDialog);
  productsList: ProductInterface[] = [];
  displayedColumns: string[] = ['logo', 'name', 'description', 'date_release', 'date_revision', 'icon'];
  dataSource: any

  constructor(private productService: ProductService) { 

  }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngOnInit(): void {
    this.getProducts();
  }


  openDeleteDialog(){
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(productS => {
      console.log(productS)
      this.PRODUCTS = productS;
      this.dataSource = new MatTableDataSource<ProductInterface>(this.PRODUCTS);
  	  this.dataSource.paginator = this.paginator;
    })
  }
}




