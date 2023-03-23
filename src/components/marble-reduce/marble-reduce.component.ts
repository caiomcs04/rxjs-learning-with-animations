import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { from, of, Observable, interval } from 'rxjs';
import { switchMap, take, reduce, tap } from 'rxjs/operators';

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
  selector: 'app-marble-reduce',
  templateUrl: './marble-reduce.component.html',
  styleUrls: ['./marble-reduce.component.scss'],
})
export class MarbleReduceComponent {
  public firstValue?: number;
  public secondValue?: number;
  public thirdValue?: number;
  public fourthValue?: number;
  public filterValue?: number;


  public obsOutput?: number;

  public numbers$?: Observable<number>;
  public timer$ = interval(100);

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
      this.fourthValue === undefined
    ) {
      return;
    }
    console.log('JHE')

    this.timer$
      .pipe(
        switchMap((value) => of(numbers[value])),
        take(4),
        reduce((acc, curr) =>acc + curr!, 0 ),
        tap(console.log)
      )
      .subscribe({
        next: (value) =>  this.obsOutput = value,
        error: (err) => console.warn(err),
      });
  }

  reset() {
    this.firstValue = undefined;
    this.secondValue = undefined;
    this.thirdValue = undefined;
    this.fourthValue = undefined;
    this.obsOutput = undefined;
  }
}
