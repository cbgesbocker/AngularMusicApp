import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private isLoggedIn: boolean;

  constructor(private store: Store<{ admin: { isValidState: boolean } }>) {
    this.store.select("admin").subscribe(data => {
      this.isLoggedIn = data.isValidState;
    });
  }

  ngOnInit() {}
}
