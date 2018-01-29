import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectable]'
})
export class SelectableDirective {

  private element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @HostListener('click') select() {
    this.element.style.border = '2px solid black';
  }
}
