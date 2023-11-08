import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-block-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './block-nav.component.html',
  styles: [
  ]
})
export class BlockNavComponent {

}
