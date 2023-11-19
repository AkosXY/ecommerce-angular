import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ProductGridComponent } from './product-grid.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';


const routes: Routes = [
  {
    path: '',
    component: ProductGridComponent
  }
];


@NgModule({
  declarations: [
    ProductGridComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,

    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]

})
export class ProductGridModule { }
