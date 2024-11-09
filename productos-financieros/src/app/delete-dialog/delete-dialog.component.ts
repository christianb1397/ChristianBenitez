import { AfterViewInit, Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../../../be-productos-financieros/src/interfaces/product.interface';
import { ProductService } from '../services/product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  deletedProduct?: ProductInterface;
  productList?: ProductInterface[];

  productId: string | null = ''

  constructor(private productService: ProductService, @Inject(MAT_DIALOG_DATA) public data: {id: string | null}){

      this.productId = this.data.id
      console.log(this.productId)
      this.productService.getProducts().subscribe(products => {
  
        this.productList = products;
        console.log(this.productList)
  
        this.deletedProduct = this.productList?.find(element => element.id == this.productId)
        console.log(this.deletedProduct)
  
      })

  }


  ngOnInit(): void { }

  onDelete(){
    if(this.productId){
      this.productService.deleteProduct(this.productId).subscribe(productDeleted => {
        console.log(">>>>>>>>"+productDeleted)
      })
    }

  }




}
