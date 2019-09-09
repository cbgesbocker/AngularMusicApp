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

  constructor(private store: Store<{ admin: { isValidState: boolean } }>) {}
  ngOnInit() {
    this.store.select("admin").subscribe((data: { isValidState: boolean }) => {
      this.isLoggedIn = data.isValidState;
    });
  }
}
