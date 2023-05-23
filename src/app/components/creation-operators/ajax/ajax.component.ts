import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/internal/ajax/ajax';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss'],
})
export class AjaxComponent implements OnInit {
  ngOnInit(): void {
    this.operatorAjax();
  }

  private operatorAjax() {
    const http$ = ajax.getJSON('http://localhost:3000/users').pipe(
      catchError((err) => {
        console.error(err);
        return of(err);
      })
    );

    http$.subscribe((data) => console.log(data));
  }
}
