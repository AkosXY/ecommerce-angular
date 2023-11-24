import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedMaterialModule } from "src/app/shared/shared.material.module";
import { ProductCardComponent } from "../shared-product/product-card/product-card.component";
import { ProductGridComponent } from "./product-grid.component";
import { ProductDetailDialogComponent } from "../shared-product/product-detail-dialog/product-detail-dialog.component";
import { SharedProductModule } from "../shared-product/shared-product.module";

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
    SharedMaterialModule,
    SharedProductModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]

})
export class ProductGridModule { }
