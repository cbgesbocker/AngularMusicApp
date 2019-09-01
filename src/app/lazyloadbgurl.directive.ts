import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appLazyloadBgUrl]"
})
export class LazyloadBgUrlDirective {
  @Input("appLazyloadBgUrl") url: string;

  constructor(el: ElementRef) {
    el.nativeElement.style.background = `url(${this.url})`;
  }
}
