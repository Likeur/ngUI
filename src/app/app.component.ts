import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Footer1Component } from './components/footer/footer1/footer1.component';
import { Nav1Component } from './components/navbar/nav1/nav1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Nav1Component, Footer1Component],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'ngUI';
}
