import { Directive, ElementRef, DoCheck } from '@angular/core';
import { ellipsify } from './ellipsity';

@Directive({
  selector: '[ellipsify]',
})
export class EllipsifyDirective implements DoCheck {

  private originalText;
  private originalWidth;
  private originalHeight;

  constructor(private el: ElementRef) {
    this.originalText = el.nativeElement.innerText;

    let bbox = el.nativeElement.getBoundingClientRect();
    this.originalWidth = bbox.width;
    this.originalHeight = bbox.height;
  }

  ngDoCheck() {
    if (this.el.nativeElement.innerText !== this.originalText) {
      this.originalText = this.el.nativeElement.innerText;
      ellipsify(this.el.nativeElement);
    }

    let bbox = this.el.nativeElement.getBoundingClientRect();

    if (this.originalWidth !== bbox.width) {
      this.originalText = this.el.nativeElement.innerText;
      this.originalWidth = bbox.width;
      ellipsify(this.el.nativeElement);
    }

    if (this.originalHeight !== bbox.height) {
      this.originalText = this.el.nativeElement.innerText;
      this.originalHeight = bbox.height;
      ellipsify(this.el.nativeElement);
    }
  }
}
