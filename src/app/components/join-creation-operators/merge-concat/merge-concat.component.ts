import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { concat, merge } from 'rxjs';

@Component({
  selector: 'app-merge-concat',
  template: `<p>merge-concat works!</p> `,
})
//In RxJS, the merge operator is used to combine multiple Observables into a single Observable that emits all
// the values from each source Observable as they are emitted. It merges the values in a concurrent manner,
// meaning that the emitted values can interleave in the resulting Observable.
export class MergeConcatComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.mergeConcat();
  }

  private mergeConcat() {
    const localUsers$ = this.apiService.getLocalUsers();
    const externalUsers$ = this.apiService.getExternalUsers();

    const result1$ = merge(localUsers$, externalUsers$);
    result1$.subscribe((value) => console.log('1. ', value));

    const result2$ = concat(localUsers$, externalUsers$);
    result2$.subscribe((value) => console.log('2. ', value));
  }
}
