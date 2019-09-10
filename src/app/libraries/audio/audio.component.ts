import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-audio",
  templateUrl: "./audio.component.html",
  styleUrls: ["./audio.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioComponent implements OnInit, OnChanges {
  @Input() src: string;
  @ViewChild("audio", { static: false }) audio: ElementRef;

  constructor() {}

  ngOnChanges() {
    if (this.audio) {
      this.audio.nativeElement.load();
    }
  }
  ngOnInit() {}
}
