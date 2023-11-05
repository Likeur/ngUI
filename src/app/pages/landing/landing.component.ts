import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer1Component } from 'src/app/components/footer/footer1/footer1.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,Footer1Component, RouterModule],
  templateUrl: './landing.component.html',
  
})
export default class LandingComponent {

}
