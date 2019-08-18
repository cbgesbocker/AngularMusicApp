import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private isLoggedIn: Observable<boolean>;
  constructor(private store: Store<{ isLoggedIn: boolean }>) {
    this.isLoggedIn = this.store.select("authState");
  }

  ngOnInit() {}
}
