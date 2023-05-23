import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss'],
})
export class ThrowErrorComponent implements OnInit {
  ngOnInit(): void {
    this.operatorThrowError();
  }

  private operatorThrowError() {
    const err = throwError('This is the error');

    err.subscribe(
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
