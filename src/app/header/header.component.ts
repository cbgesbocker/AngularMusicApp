import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private isLoggedIn: boolean;

  constructor(private store: Store<{ authState: { isLoggedIn: boolean } }>) {
    this.store.select("authState").subscribe(data => {
      this.isLoggedIn = data.isLoggedIn;
    });
  }

  ngOnInit() {}
}
