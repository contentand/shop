import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBeautify]'
})
export class BeautifyDirective {

  constructor() { }

  private defaultBackground: string;

  @HostBinding('style.background') background: string;
  @HostListener('mouseenter') onMouseEnter() {
      this.defaultBackground = this.background;
      this.background = 'rgba(' + Math.floor(Math.random() * 255)
                          + ',' + Math.floor(Math.random() * 255)
                          + ',' + Math.floor(Math.random() * 255)
                          + ', 0.5)';
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.background = this.defaultBackground;
  }

}
