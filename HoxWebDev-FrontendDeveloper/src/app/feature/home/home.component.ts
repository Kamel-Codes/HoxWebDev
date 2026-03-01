import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ScrollRevealDirective]
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTime = '';
  private interval: any;

  ngOnInit() {
    this.updateTime();
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval); // مهم عشان تمنع memory leak
  }

  updateTime() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Africa/Cairo'
    };
    this.currentTime = now.toLocaleTimeString('en-US', options);
  }
}