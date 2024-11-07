import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

  searchProduct: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter();

  onSearch() {
    this.search.emit(this.searchProduct);
  }

}
