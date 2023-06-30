import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("srvElement") public element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") content: ElementRef;

  constructor() {
    console.log("constructor called!")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!")
    console.log(changes)
  }

  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  ngOnInit(): void {
    console.log("ngInit called!");
    // console.log(this.header.nativeElement.textContent)
    // console.log(this.content.nativeElement.textContent)
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
    console.log("Test: " + this.content.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!")
  }
}
