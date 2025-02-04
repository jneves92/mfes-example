import { Component } from '@angular/core';
import { LoginComponent, UserAuthComponent } from 'auth-lib';


@Component({
  selector: 'app-home',
  imports: [LoginComponent, UserAuthComponent],
  template: `
    <lib-user-auth></lib-user-auth>

    <hr>

    <lib-login></lib-login>
  `,
  styles: ``
})
export class HomeComponent {

}
