import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public gameStart = false;
  public currentNumber = 0;
  private interval: number;
  public evenArray: number[] = [];
  public oddArray: number[] = [];

  onGameStart(eventData: boolean) {
    this.gameStart = eventData

    if (this.gameStart) {
      this.interval = setInterval(() => {
        this.currentNumber++;

        if (this.currentNumber % 2 == 0) {
          this.evenArray.push(this.currentNumber)
        } else {
          this.oddArray.push(this.currentNumber)
        }
      }, 1000)
    } else {
      clearInterval(this.interval)
    }
  }
}
