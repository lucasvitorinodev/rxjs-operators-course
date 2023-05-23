import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  template: '<p>from works!</p>\n',
})
//In RxJS, the from operator is used to create an Observable from various types of input sources, such as arrays,
// promises, iterables, or other observables. It is a versatile operator that allows you to convert these input
// sources into an Observable stream, enabling you to work with them using RxJS operators and reactive programming
// techniques.
export class FromComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFrom();
  }

  operatorFrom() {
    const arr = from([1, 2, 3, 4, 5, 6]);
    const promise = from(new Promise((resolve) => resolve('hello world')));
    const string = from('Hello world');

    arr.subscribe((value) => console.log(value));
    promise.subscribe((value) => console.log(value));
    string.subscribe((value) => console.log(value));
  }
}
