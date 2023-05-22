import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})

// 1. Observable
// An observable can be seen as a stream of data that emits values at different points in time.
// These values can be of any type, such as numbers, strings, objects, or even other observables.
// Observables are used to model and manipulate data flows in a reactive manner.

// 2. Observer
// In RxJS, an observer is an object that defines how to handle the values, errors, and completion signals emitted by
// an observable. It is a core component in the observer pattern and is used to consume and react to the data
// emitted by an observable.
export class ObservablesComponent implements OnInit {
  ngOnInit() {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(25);
      subscriber.next('Lucas');
      subscriber.next(true);
      subscriber.next({ name: 'Lucas' });
      subscriber.complete();
    });

    const observer = {
      next: (value: any) => console.log(`Observer next = ${value}`),
      error: (error: any) => console.error(`Observer error = ${error}`),
      complete: () => console.log('Observer completed!'),
    };

    observable.subscribe(observer);
  }
}
