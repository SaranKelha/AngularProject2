import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [NavbarComponent,RouterLink,RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
