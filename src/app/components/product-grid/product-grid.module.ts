import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ProductGridComponent } from './product-grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: ProductGridComponent
  }
];


@NgModule({
  declarations: [
    ProductGridComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]

})
export class ProductGridModule { }
