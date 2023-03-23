import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { from, of, Observable, scan, interval } from 'rxjs';
import {
  map,
  delay,
  switchMap,
  take,
  tap,
  takeWhile,
  skipWhile,
} from 'rxjs/operators';

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
  selector: 'app-marble-map',
  templateUrl: './marble-map.component.html',
  styleUrls: ['./marble-map.component.scss'],
})
export class MarbleMapComponent {
  public firstValue?: number;
  public secondValue?: number;
  public thirdValue?: number;
  public fourthValue?: number;
  public operationValue?: number;

  public operation?: '+' | '-' | '*' | '/';

  public obsOutput: Array<number> = [];

  public numbers$?: Observable<number>;
  public timer$ = interval(1000);

  onOperationChange(operation: any) {
    this.operation = operation.value;
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
      this.operationValue === undefined ||
      this.operation === undefined
    ) {
      return;
    }
    this.timer$
      .pipe(
        switchMap((value) =>
          of(numbers[value])
        ),
        take(4),
        map((value) =>
          eval(`${value} ${this.operation} ${this.operationValue}`)
        )
      )
      .subscribe({
        next: (value) => this.obsOutput.push(value),
        error: (err) => console.warn(err),
      });
  }

  reset() {
    this.firstValue = undefined;
    this.secondValue = undefined;
    this.thirdValue = undefined;
    this.fourthValue = undefined;
    this.operationValue = undefined;
    this.operation = undefined;
    this.obsOutput = []
  }
}
