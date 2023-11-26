import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/serivces/authentication.service';
import { ProductService } from 'src/app/serivces/product.service';
import { User, NULL_USER } from "../../interface/user.interface";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private authService: AuthenticationService, private productService: ProductService) {
    this.getPurchesedData()

  }



  userData = NULL_USER;
  productData: any


  ngOnInit(): void {
    this.userData = this.authService.getUserData()
    console.log(this.userData)
  }

  getUserData(): User {
    return this.authService.getUserData();
  }

  isUserNull() {
    return this.userData === NULL_USER;
  }

  getPurchesedData() {
    console.log("getter")
    this.productData = false
    this.productService.getPreviosOrders().subscribe((resp) => {
      console.log(resp)
      this.productData = resp
    })
  }

}
