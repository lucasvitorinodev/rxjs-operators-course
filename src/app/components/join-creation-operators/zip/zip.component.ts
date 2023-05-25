import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  template: `<p>zip works!</p>`,
})
// In RxJS, the zip operator is used to combine the latest values from multiple Observables into a
// single Observable. It takes one or more input Observables and emits an array or a value derived from
// the combined values of these Observables.
export class ZipComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.operatorZip();
  }

  private operatorZip() {
    const localUsers$ = this.apiService.getLocalUsers();
    const externalUsers$ = this.apiService.getExternalUsers();

    const result$ = zip(localUsers$, externalUsers$);

    result$.subscribe((value) => console.log(value));
  }
}
