import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  logout() {
    // Clear user session data
    sessionStorage.removeItem('userId');
    
    // Notify other components about the logout
    this.isAuthenticatedSubject.next(false);
  }
}
