import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  template: ` <p>from-event works!</p>
    <button #myButton>BTN TEST</button>`,
})
// From event operator
// In RxJS, the fromEvent operator is used to create an Observable that emits events from a specified DOM element
// or Node.js EventEmitter. It allows you to handle and transform events in a reactive manner using the power of
// Observables and RxJS operators.
export class FromEventComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;
  ngAfterViewInit(): void {
    this.operatorFromEvent();
  }

  private operatorFromEvent() {
    const el = fromEvent(this.myButton.nativeElement, 'click');

    el.subscribe((value) => console.log(value));
  }
}
