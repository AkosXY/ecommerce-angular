import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/serivces/authentication.service';
import { CartService } from 'src/app/serivces/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  hideBadge = true
  cartItems = 0

  constructor(private authService: AuthenticationService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartUpdated.subscribe((count: number) => {
      this.cartItems = count;
      this.cartItems > 0 ? this.hideBadge = false : this.hideBadge = true
    });

    this.cartItems = this.cartService.getItemNumber();
    this.cartItems > 0 ? this.hideBadge = false : this.hideBadge = true;
  }

  getAuthenticated(): boolean {
    return this.authService.getAuthenticated();
  }

  logout() {
    this.authService.logout()
  }


}
