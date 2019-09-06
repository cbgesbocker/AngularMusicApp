import { Directive, Input, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appLazyLoadImage]"
})
export class LazyLoadImageDirective implements OnInit {
  @Input("appLazyLoadImage") url: string;
  @Input("appLazyLoadWaitTime") waitTime: number = 100;

  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundImage = `url(${this.url})`;

    setTimeout(() => {
      this.el.nativeElement.classList.remove("opacity-0");
    }, this.waitTime);
  }
}
