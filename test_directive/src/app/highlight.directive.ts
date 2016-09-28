import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight')
  backgroundColor: string;

  @Input('color')
  textColor: string;

  defaultColor: string = 'orange';

  constructor(
    private el: ElementRef, //reference of Directive's element
    private renderer: Renderer
  ) { }

   doHighlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor',color);

    if(this.textColor)
      this.renderer.setElementStyle(this.el.nativeElement, 'color', this.textColor);

    if(this.textColor && color == null)
      this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
   }

    @HostListener('mouseenter') onMouseEnter() {
      this.doHighlight(this.backgroundColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.doHighlight(null);
    }

}
