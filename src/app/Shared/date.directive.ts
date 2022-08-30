import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

 @Input()
 public date: Date;
  public paragraph;


  constructor(private el:ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p')
   }

  @HostListener('mouseenter')
  mouseenter(evenDate: Event)
  {
    this.paragraph.innerHTML = this.date.toLocaleTimeString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph)
  }

  @HostListener('mouseleave')
  mouseleave(evenDate: Event)
  {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph)
    
  }
}
