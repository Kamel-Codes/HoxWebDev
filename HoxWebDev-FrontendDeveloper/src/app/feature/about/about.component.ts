import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [CommonModule, ScrollRevealDirective, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
constructor(private sanitizer: DomSanitizer) {}
interests: { icon: SafeHtml; label: string }[] = [];

ngOnInit() {
  this.interests = [
    {icon:this.sanitizer.bypassSecurityTrustHtml(`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>`),
      label: 'Coding'},
      {icon: this.sanitizer.bypassSecurityTrustHtml(`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path></svg>`),
      label: 'AI'},
      {icon: this.sanitizer.bypassSecurityTrustHtml( `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg>`),
      label: 'Learning'},
      {icon:this.sanitizer.bypassSecurityTrustHtml(`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path></svg>`),
      label: 'Gaming'},
  ];
}

  workWith = [
    'MSN Technologies',
    'Egyptian Navy ShipYard',
    'MSN Technologies',
    'Egyptian Navy ShipYard',
    'MSN Technologies',
    'Egyptian Navy ShipYard',
    'MSN Technologies',
    'Egyptian Navy ShipYard'
    
  ];
  isHovered = false;

  hover(state: boolean) {
    this.isHovered = state;
  }

}
