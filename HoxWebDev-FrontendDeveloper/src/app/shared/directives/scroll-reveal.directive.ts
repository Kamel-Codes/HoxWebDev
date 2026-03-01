import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit {

  @Input() delay = 0;
  @Input() distance = 40;
  @Input() duration = 600;

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.prepareInitialState();
    this.createObserver();
  }

  // 🟡 الحالة الابتدائية
  private prepareInitialState() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'opacity',
      '0'
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translateY(${this.distance}px)`
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      `all ${this.duration}ms cubic-bezier(.2,.8,.2,1)`
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'transition-delay',
      `${this.delay}ms`
    );
  }
  private hide() {
  this.renderer.setStyle(
    this.el.nativeElement,
    'opacity',
    '0'
  );

  this.renderer.setStyle(
    this.el.nativeElement,
    'transform',
    `translateY(${this.distance}px)`
  );
}

  // 🟢 مراقبة الظهور
  private createObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
          this.reveal();
        } else {
          this.hide(); // 👈 الجديد
        }
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  // 🔥 تنفيذ الأنيميشن
  private reveal() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'opacity',
      '1'
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'translateY(0)'
    );
  }
}
