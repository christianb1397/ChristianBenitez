import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductSearchComponent } from './product-search/product-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductSearchComponent,
    FormRegisterComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


