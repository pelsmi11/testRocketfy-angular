import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.css'],
})
export class ReturnButtonComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/']);
  }
}
