import { Component, Input } from "@angular/core";

@Component({
  selector: "app-number-display",
  templateUrl: "./number-display.component.html"
})
export class NumberDisplayComponent {
  @Input() public isOdd: boolean;
  @Input() public numArray: number[];
}
