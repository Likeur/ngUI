import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BlockNavComponent } from './block-nav/block-nav.component';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './blocks.component.html',
})
export default class BlocksComponent {

  
}
