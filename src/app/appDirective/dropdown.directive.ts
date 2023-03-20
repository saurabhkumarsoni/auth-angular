import { HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

 @HostBinding('class.active') className: any;
 @HostListener('click') click(){
  this.className = !this.className;
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
 }

}
