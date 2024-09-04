import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../services/auth/user";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: User = {userName: "", email: "", role: "" ,password: ""};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  signup(credentials : User) {
    this.authService.signup(credentials).subscribe(res => {
      console.log('res ', res);
      // Redirect to user dashboard
    });
  }
}
