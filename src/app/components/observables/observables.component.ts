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

    observable.subscribe(
      (value) => console.log(value),
      (err) => console.log(err),
      () => console.log('Completed')
    );
  }
}
