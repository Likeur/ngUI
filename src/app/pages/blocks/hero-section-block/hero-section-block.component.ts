import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockNavComponent } from '../block-nav/block-nav.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import LandingComponent from '../../landing/landing.component';
import { Footer1Component } from 'src/app/components/footer/footer1/footer1.component';

@Component({
  selector: 'app-hero-section-block',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet , BlockNavComponent, Footer1Component],
  templateUrl: './hero-section-block.component.html',
  styles: [
  ]
})
export default class HeroSectionBlockComponent {

}
