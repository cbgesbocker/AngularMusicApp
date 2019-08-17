import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-logged-out",
  templateUrl: "./logged-out.component.html",
  styleUrls: ["./logged-out.component.scss"]
})
export class LoggedOutComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.logout();
  }
}
