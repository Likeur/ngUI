import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer1Component } from 'src/app/components/footer/footer1/footer1.component';
import { RouterModule } from '@angular/router';
import { Featuresec1Component } from 'src/app/components/feature-section/featuresec1/featuresec1.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,Footer1Component, RouterModule, Featuresec1Component],
  templateUrl: './landing.component.html',
  
})
export default class LandingComponent {

}
