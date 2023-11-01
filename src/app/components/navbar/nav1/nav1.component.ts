import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav1.component.html',
  styles: [
  ]
})
export class Nav1Component {

  isOpenNav(){
    function openNav(){
      const navBar = document.querySelector('#nav-bar')!
      const barUn = document.querySelector('#barUn')!
      const barDeux = document.querySelector('#barDeux')!

      navBar.classList.toggle('hidden')
      barUn.classList.toggle('rotate-45')
      barDeux.classList.toggle('rotate-45')

    }
    openNav()
  }
}
