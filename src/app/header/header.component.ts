import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import UtilsService from "../utils.service";

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

  confirmSignout($event) {
    if (confirm("Are you sure you want to sign out?")) {
      $event.preventDefault();
      UtilsService.redirectTo("/");
    }
  }

  ngOnInit() {}
}
