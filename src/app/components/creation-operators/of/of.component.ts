import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
// In RxJS, the of operator is used to create an Observable that emits a sequence of values. It allows you to easily
// create an Observable that emits one or more values in a synchronous manner.
export class OfComponent implements OnInit {
  ngOnInit(): void {
    this.operatorOf();
  }

  operatorOf() {
    const arr = of([1, 2, 3, 4, 5, 6]);
    const promise = of(new Promise((resolve) => resolve('hello world')));
    const string = of('Hello world');

    const multiValue = of(1, 5, 8, 9);

    arr.subscribe((value) => console.log(value));
    promise.subscribe((value) => console.log(value));
    string.subscribe((value) => console.log(value));
    multiValue.subscribe((value) => console.log(value));
  }
}

//The main difference between the of and from operators in RxJS lies in the type of input they accept and the way they create Observables:
//
// Input Types:
//
// of: The of operator accepts a variable number of arguments, each representing a value to be
// emitted by the Observable. For example, of(1, 2, 3) creates an Observable that emits the values 1, 2, and 3.

// from: The from operator accepts various types of input sources, such as arrays, promises, iterables,
// or other observables. It converts these input sources into an Observable that emits the values from the source.
// For example, from([1, 2, 3]) creates an Observable that emits the values 1, 2, and 3 from the array.
