import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef, private ren: Renderer2) { 
  }

  @HostListener('mouseenter') 
  OnMouseEnter() {
    this.ren.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave')
  OnMouseLeave() {
    this.ren.setStyle(this.el.nativeElement, 'color', 'black');
  }

}
