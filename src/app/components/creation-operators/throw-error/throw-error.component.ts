import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  template: `<p>throw-error works!</p> `,
})
export class ThrowErrorComponent implements OnInit {
  ngOnInit(): void {
    this.operatorThrowError();
  }

  private operatorThrowError() {
    const err$ = throwError('This is the error');

    err$.subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error(`Error: ${error}`);
      },
      () => {
        console.log('Completed');
      }
    );
  }
}
