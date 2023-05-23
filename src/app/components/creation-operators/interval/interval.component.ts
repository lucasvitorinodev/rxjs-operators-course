import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  template: `<p>interval works!</p>`,
})
// In RxJS, the interval operator is used to create an Observable that emits sequential numbers at a specified
// time interval. It emits an incrementing integer value starting from 0 and emits the next value after the
// specified time interval has elapsed.
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    this.operatorInterval();
  }

  private operatorInterval() {
    const num = interval(1000);

    const subscription = num.subscribe((val) => {
      console.log(val);
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
