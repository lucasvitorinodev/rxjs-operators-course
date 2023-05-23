import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  template: `<p>subject works!</p> `,
})

// 4. Subject
// In RxJS, a Subject is a special type of observable that allows values to be multicasted to multiple observers.
// It acts both as an Observable and an Observer, which means it can emit values and also be subscribed to like any
// other observable.
//
// Subjects are useful when you want to share the same set of values with multiple observers.

// 5. Behavior Subject
// In RxJS, a BehaviorSubject is a variant of the Subject class that retains the most recent value
// emitted and replays it to new subscribers. It is both an Observable and an Observer, just like a Subject,
// but it has an initial value and remembers the latest emitted value.
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    this.initSubject();
  }

  initSubject() {
    const subject = new Subject<number>();
    const behaviorSubject = new BehaviorSubject<number>(0);

    subject.subscribe({
      next: (value: number) => console.log(`Subs 1 = ${value}`),
    });

    subject.subscribe({
      next: (value: number) => console.log(`Subs 2 = ${value}`),
    });

    behaviorSubject.subscribe({
      next: (value: number) => console.log(`B Subs 1 = ${value}`),
    });

    behaviorSubject.subscribe({
      next: (value: number) => console.log(`B Subs 2 = ${value}`),
    });

    subject.next(10);
    subject.next(12);
    behaviorSubject.next(12);
  }
}
