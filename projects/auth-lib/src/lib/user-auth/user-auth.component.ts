import { Component, inject } from '@angular/core';
import { AuthService } from 'auth-lib';

@Component({
  selector: 'lib-user-auth',
  imports: [],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {
  _auth = inject(AuthService);
}
