import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <p>This is inline HTML from the component TypeScript file.</p>
  `,
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent {

}
