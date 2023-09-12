import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  times : string[];

  constructor() {
    this.times = ["West Ham", "Paysandu", "Orlando City"];
  }

}
