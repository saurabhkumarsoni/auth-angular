import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseover') mouseOver(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgray');
  }

  @HostListener('mouseout') mouseOut(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

}
