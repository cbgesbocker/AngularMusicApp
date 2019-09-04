import { Directive, Input, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appLazyLoadImage]"
})
export class LazyLoadImageDirective implements OnInit {
  @Input("appLazyLoadImage") url: string;

  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    this.el.nativeElement.style.background = `url(${this.url})`;
    this.el.nativeElement.classList.remove("opacity-0");
  }
}
