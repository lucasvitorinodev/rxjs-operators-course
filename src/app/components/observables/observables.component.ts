import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  template: `<p>observables works!</p> `,
})

// 1. Observable
// An observable can be seen as a stream of data that emits values at different points in time.
// These values can be of any type, such as numbers, strings, objects, or even other observables.
// Observables are used to model and manipulate data flows in a reactive manner.

// 2. Observer
// In RxJS, an observer is an object that defines how to handle the values, errors, and completion signals emitted by
// an observable. It is a core component in the observer pattern and is used to consume and react to the data
// emitted by an observable.

// 3. Subscription
// In RxJS, a subscription represents the connection between an observer and an observable.
// It allows the observer to receive values emitted by the observable and defines how the observer handles
// those values, errors, and completion signals.
// Unsubscribe: Subscriptions also provide a way to unsubscribe or cancel the ongoing interaction between the
// observer and the observable. By calling the unsubscribe() method on the subscription object, you can terminate
// the subscription and stop receiving further values from the observable.
export class ObservablesComponent implements OnInit {
  ngOnInit() {
    this.initObservable();
  }

  initObservable() {
    // Simple Observable
    const observable = new Observable((subscriber) => {
      subscriber.next(25);
      subscriber.next('Lucas');
      subscriber.next(true);
      subscriber.next({ name: 'Lucas' });
      subscriber.complete();
    });

    // Observer
    const observer = {
      next: (value: any) => console.log(`Observer next = ${value}`),
      error: (error: any) => console.error(`Observer error = ${error}`),
      complete: () => console.log('Observer completed!'),
    };

    // Subscribe to the simple observable
    observable.subscribe(observer);

    // Creating a new observable
    const it = interval(1000);

    // Testing subscription and unsubscription
    const subscription = it.subscribe(observer);
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed!');
    }, 5000);
  }
}
