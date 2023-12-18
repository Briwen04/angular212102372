import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',  // No template is needed for this component
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Perform logout when the component initializes
    this.authService.logout();

    // Redirect to the login page after logging out
    this.router.navigate(['/login']);
  }
}
