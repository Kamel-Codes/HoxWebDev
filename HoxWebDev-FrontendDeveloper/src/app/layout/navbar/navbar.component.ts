import { Component, HostListener } from '@angular/core';
import { RouterLink,RouterLinkActive } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { MenuService } from '../../core/services/menu.service';
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  isAltStyle = false;

  toggleNavStyle() {
    this.isAltStyle = !this.isAltStyle;
  }
  togelLayer: any;
  layerTogel(){
    this.togelLayer = !this.togelLayer
  }
  isScroled: any;
    @HostListener('window:scroll') onWindowScroll(){
      this.isScroled= window.scrollY > 50;
    }
  // isMenuOpen = false;

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  // btnTogel = false;
  // btnTogelF(){
  //   this.btnTogel = !this.btnTogel
  // }
  isOpen = false;

  constructor(private menu: MenuService) {
    this.menu.isOpen$.subscribe(v => (this.isOpen = v));
  }

  toggleMenu() {
    this.menu.toggle();
  }
  
}
