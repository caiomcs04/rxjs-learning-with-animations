import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { from, of, Observable, scan, interval } from 'rxjs';
import { switchMap, take, filter } from 'rxjs/operators';

@Component({
  animations: [
    trigger('createMarble', [
      transition(':enter', [
        style({ height: 0, opacity: 0, width: 0 }),
        animate(
          '1s ease-out',
          style({ height: '50px', width: '50px', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
  selector: 'app-marble-filter',
  templateUrl: './marble-filter.component.html',
  styleUrls: ['./marble-filter.component.scss'],
})
export class MarbleFilterComponent {
  public firstValue?: number;
  public secondValue?: number;
  public thirdValue?: number;
  public fourthValue?: number;
  public filterValue?: number;

  public choice?: 'even' | 'odd';

  public obsOutput: Array<number> = [];

  public numbers$?: Observable<number>;
  public timer$ = interval(1000);

  evenOrOdd(operation: any) {
    this.choice = operation.value;
  }

  start() {
    const numbers = [
      this.firstValue,
      this.secondValue,
      this.thirdValue,
      this.fourthValue,
    ];

    if (
      this.firstValue === undefined ||
      this.secondValue === undefined ||
      this.thirdValue === undefined ||
      this.fourthValue === undefined ||
      this.choice === undefined
    ) {
      return;
    }

    this.timer$
      .pipe(
        switchMap((value) => of(numbers[value])),
        take(4),
        filter((value) => {
          if (value) {
            if (this.choice === 'even') {
              return value % 2 === 0;
            }

            return value % 2 !== 0;
          }
          return false;
        })
      )
      .subscribe({
        next: (value) => this.obsOutput.push(value!),
        error: (err) => console.warn(err),
      });
  }

  reset() {
    this.firstValue = undefined;
    this.secondValue = undefined;
    this.thirdValue = undefined;
    this.fourthValue = undefined;
    this.choice = undefined;
    this.obsOutput = [];
  }
}
