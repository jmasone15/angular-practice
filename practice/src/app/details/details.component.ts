import { Component } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styles: [`
    .white-text {
      color: white
    }
  `]
})
export class DetailsComponent {
  showPassword: boolean;
  clickTimestamps: Date[];

  constructor() {
    this.showPassword = false;
    this.clickTimestamps = [];
  }

  onButtonClick() {
    this.showPassword = !this.showPassword;
    this.clickTimestamps.push(new Date())
  }
}
