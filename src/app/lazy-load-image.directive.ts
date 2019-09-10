import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnChanges,
  OnDestroy
} from "@angular/core";

@Directive({
  selector: "[appLazyLoadImage]"
})
export class LazyLoadImageDirective implements OnInit, OnChanges {
  @Input("appLazyLoadImage") url: string;
  @Input("appLazyLoadWaitTime") waitTime: number = 100;

  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnChanges() {
    this.loadImage();
  }

  ngOnInit() {
    this.loadImage();
  }

  private loadImage() {
    this.el.nativeElement.style.backgroundImage = `url(${this.url})`;

    setTimeout(() => {
      this.el.nativeElement.classList.remove("opacity-0");
    }, this.waitTime);
  }
}
