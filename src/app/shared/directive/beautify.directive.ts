import { Directive, HostBinding, HostListener, OnInit, Inject } from '@angular/core';
import { ConstantsService, RANDOM_STRING } from '../service';

@Directive({
  selector: '[appBeautify]'
})
export class BeautifyDirective implements OnInit {

  private defaultBackground: string;
  @HostBinding('style.background') background: string;

  constructor(
    private constantsService: ConstantsService,
    @Inject(RANDOM_STRING) private randomText: string
  ) { }

  ngOnInit(): void {
    console.log(
      `
      Application: ${this.constantsService.getApplication()},
      Version: ${this.constantsService.getVersion()},
      Random: ${this.randomText}
      `
    );
  }

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
