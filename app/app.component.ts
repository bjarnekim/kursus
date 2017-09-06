import { Component } from '@angular/core';
import { BkadataService } from "./bkadata.service";

@Component({
  selector: 'app-root',
  template: `
    <h1> </h1>
      Welcome to {{title}}!!
      <app-child></app-child>
      <app-side-bar></app-side-bar>
      <app-menu></app-menu>
      noget nyt fra service: {{this.hils}}
      <br>som json {{this.hils|json}}
    
  `,
  styles: [],
  providers: [BkadataService]
})
export class AppComponent {
  title = 'Denne app';
  navn:string = 'bjarne';
  hils: string;

  newName() {
    this.navn = 'kurt';
  }

  constructor (private bka:BkadataService) {
  }

  ngOnInit () {
    this.hils = this.bka.hilsenData();
  }
}
