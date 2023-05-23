import { Component, OnInit } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
// In RxJS, the timer operator is used to create an Observable that emits a single value after a specified delay.
// It allows you to introduce time-based delays and schedule emissions in a reactive manner.
export class TimerComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTimer();
  }

  private operatorTimer() {
    // const values = of(1, 2, 3);
    // timer(5000)
    //   .pipe(concatMap(() => values))
    //   .subscribe((values) => console.log(values));

    // Create an Observable that emits values every 1 second after a 2-second initial delay
    const source$ = timer(1000, 1000);

    // Subscribe to the timer
    const subscription = source$.subscribe((value) =>
      console.log('Value:', value)
    );
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
