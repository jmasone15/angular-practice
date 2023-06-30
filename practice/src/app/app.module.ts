import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { GameControlComponent } from "./game-control/game-control.component";
import { NumberDisplayComponent } from "./number-display/number-display.component";

@NgModule({
  declarations: [ AppComponent, GameControlComponent, NumberDisplayComponent ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
