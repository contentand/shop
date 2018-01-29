import { Directive, HostBinding, HostListener, OnInit, Inject, Optional } from '@angular/core';
import { ConstantsService, RANDOM_STRING } from '../service';

@Directive({
  selector: '[appBeautify]'
})
export class BeautifyDirective implements OnInit {

  private defaultBackground: string;
  @HostBinding('style.background') background: string;

  constructor(
    @Optional() private constantsService: ConstantsService,
    @Inject(RANDOM_STRING) @Optional() private randomText: string
  ) { }

  ngOnInit(): void {
    console.log(
      `
      Application: ${this.constantsService ? this.constantsService.getApplication() : 'UNKNOWN'},
      Version: ${this.constantsService ? this.constantsService.getVersion() : 'UNKNOWN'},
      Random: ${this.randomText ? this.randomText : 'NOT SET'}
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
