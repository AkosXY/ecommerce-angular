import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/serivces/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


    constructor(private authService: AuthenticationService){

    }
    logout() {
      this.authService.logout()
    }

    getAuthenticated(): boolean {
      return this.authService.getAuthenticated();
    }
  
}


