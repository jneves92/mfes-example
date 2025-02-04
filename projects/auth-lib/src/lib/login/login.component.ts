import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'auth-lib';

@Component({
  selector: 'lib-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  _auth = inject(AuthService);

  login() {
    this._auth.login(this.username, this.password);
  }

  logout() {
    this._auth.logout();
  }
}
