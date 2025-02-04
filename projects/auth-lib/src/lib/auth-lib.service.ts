import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userName: string | null = null;

  public get userName(): string | null {
    return this._userName;
  }

  constructor() { }

  login(userName: string, password: string): void {
    this._userName = userName;
    console.log(userName)
  }

  logout(): void {
    this._userName = null;
  }
}
