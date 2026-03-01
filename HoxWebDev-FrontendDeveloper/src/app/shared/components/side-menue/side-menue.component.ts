import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-side-menue',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menue.component.html',
  styleUrl: './side-menue.component.scss'
})
export class SideMenueComponent {
  

  
  //menue logic
  @Input() isOpen = false;
  activeIndex: number | undefined;

  
  constructor(private menu: MenuService) {
    this.menu.isOpen$.subscribe(v => (this.isOpen = v));
  }

  closeMenu() {
    this.menu.close();
  }
}
