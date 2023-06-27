import { Component } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html"
})
export class UsernameComponent{
  username: string;

  isUsernameEmpty() {
    return this.username === "" || this.username === undefined || this.username === null
  }

  onUsernameReset() {
    this.username = "";
  }
}
