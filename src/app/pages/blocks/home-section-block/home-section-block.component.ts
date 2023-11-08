import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-section-block',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './home-section-block.component.html',
  styles: [
  ]
})
export default class HomeSectionBlockComponent {

}
