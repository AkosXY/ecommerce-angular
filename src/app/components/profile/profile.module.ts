import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProfileComponent } from "./profile.component"
import { SharedMaterialModule } from "src/app/shared/shared.material.module";
import { FormsModule } from "@angular/forms";
import { SharedProductModule } from "../shared-product/shared-product.module";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,      
    SharedMaterialModule,
    SharedProductModule,
    RouterModule.forChild(routes),


  ],
  exports: [RouterModule]

})
export class ProfileModule { }
