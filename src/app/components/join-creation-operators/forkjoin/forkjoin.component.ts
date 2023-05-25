import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/internal/ajax/ajax';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-forkjoin',
  template: `<p>forkjoin works!</p>`,
})
// In RxJS, the forkJoin operator is used to combine the latest values from multiple Observables into a
// single Observable. It waits for all input Observables to complete and then emits an array containing
// the last emitted value from each source Observable.
export class ForkjoinComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  private operatorForkJoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExternal: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'),
    });

    const httpMult$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(1000),
      promise: Promise.resolve(10),
    });

    http$.subscribe((value) => console.log(value));
    httpMult$.subscribe((value) => console.log(value));
  }

  private getUsers() {
    const localUsers$ = this.apiService.getLocalUsers();
    const externalUsers$ = this.apiService.getExternalUsers();

    const users$ = forkJoin({
      local: localUsers$,
      external: externalUsers$,
    });

    users$.subscribe((value) => console.log(value));
  }
}
