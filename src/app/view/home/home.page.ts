import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  times : string[];

  constructor() {
    this.times = [
      {nome : "West Ham", cidade : "Londres"},
      {nome : "Paysandu", cidade : "Belém"},
      {nome : "Orlando City", "Orlando"}
    ];
  }

}
