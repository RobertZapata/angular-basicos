import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumulate(base)">Sumar + 1</button>
    <span>{{ initialNumber }}</span>
    <button (click)="acumulate(-base)">Restar - 1</button>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  initialNumber: number = 10;

  base: number = 10;

  acumulate(value: number) {
    this.initialNumber += value;
  }
}
