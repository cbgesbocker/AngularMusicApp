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
    this.el.nativeElement.style.backgroundImage = `url(${this.url})`;
    setTimeout(() => {
      this.el.nativeElement.classList.remove("opacity-0");
    }, 0.5 * Math.random() * 1000);
  }
}
