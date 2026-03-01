import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenueComponent } from './components/side-menue/side-menue.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,SideMenueComponent],
  exports: [SideMenueComponent]
})

export class SharedModule { }
