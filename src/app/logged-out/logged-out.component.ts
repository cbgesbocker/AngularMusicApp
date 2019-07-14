import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-logged-out",
  templateUrl: "./logged-out.component.html",
  styleUrls: ["./logged-out.component.scss"]
})
export class LoggedOutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.logout();
  }
}
