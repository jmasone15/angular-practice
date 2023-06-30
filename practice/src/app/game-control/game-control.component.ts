import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html"
})
export class GameControlComponent {
  private isGameStarted: boolean;
  @Output() public gameStarted = new EventEmitter<boolean>();

  onButtonClick(event: Event) {
    const element = event.target as HTMLButtonElement;

    if (element.textContent === "Start") {
      this.isGameStarted = true;
      this.gameStarted.emit(this.isGameStarted);
    } else {
      this.isGameStarted = false;
      this.gameStarted.emit(this.isGameStarted);
    }
  }
}
