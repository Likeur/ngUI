import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav1.component.html',
 
})
export class Nav1Component {

  isCloseNav = false

  isOpenNav(){
    function openNav(){
      const navBar = document.querySelector('#nav-bar')!
      const barUn = document.querySelector('#barUn')!
      const barDeux = document.querySelector('#barDeux')!

      navBar.classList.toggle('-translate-x-[100rem]')
      barUn.classList.toggle('rotate-45')
      barDeux.classList.toggle('rotate-45')

    }
    openNav()
    this.isCloseNav = false
  }

  closeNav(){
    this.isCloseNav = !this.isCloseNav

    function toggleBar(){
      const barUn = document.querySelector('#barUn')!
      const barDeux = document.querySelector('#barDeux')!
      
      barUn.classList.remove('rotate-45')
      barDeux.classList.remove('rotate-45')
    }
    toggleBar()
  }

  isDarkmode(){
    function darkmode(){
      //const body = document.querySelector('body')!
      const darkMode = document.querySelector('#darkmode')!
      const darkModeIcon = document.querySelector('#darkmodeicon')!

      document.documentElement.classList.toggle('dark')
      darkMode.classList.toggle('rotate-45')
      if (document.documentElement.className == 'dark'){
          darkModeIcon.className = 'bx bx-sun'
      } else{
          darkModeIcon.className = 'bx bx-moon'
      }
    }

    darkmode()
  }
}
