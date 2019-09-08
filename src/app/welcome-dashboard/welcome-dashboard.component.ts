import { Component, OnInit } from "@angular/core";
import { UsersService } from "../user/users.service";
import { Observable } from "rxjs";
import { User } from "../user";

@Component({
  selector: "app-welcome-dashboard",
  templateUrl: "./welcome-dashboard.component.html",
  styleUrls: ["./welcome-dashboard.component.scss"]
})
export class WelcomeDashboardComponent implements OnInit {
  private user$: Observable<User>;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.fetchMyProfile();
    this.user$ = this.usersService.getFeatureStoreObservable("userSignedIn");
  }
}
