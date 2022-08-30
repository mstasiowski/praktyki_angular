import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  title: string;
  isTimeForThisComponent: boolean;
  cars: Cars[];

  constructor() { 
    this.isTimeForThisComponent = true;

    if (this.isTimeForThisComponent){
      this.title = 'Tematem tego wpisu jest dyrektywa ng-for';
    } else {
      this.title = 'Temat tego wpisu nie dotyczy dyrektywy ng-for';
    }

    //#region 
    this.cars = [
      {brand: 'Audi', model: 'RS6', price: 729000, horsepower: 720},
      {brand: 'Pagani', model: 'Zonda F Roadster', price: 4200000, horsepower: 650},
      {brand: 'Audi', model: 'S8', price: 364800, horsepower: 605},
      {brand: 'McLaren Mercedes', model: 'SLR', price: 2400000, horsepower: 722},
    ]
    //#endregion
  }


  ngOnInit(): void {
  }
}

// Klasa określającą właściwości naszego obiektu
  class Cars {
  brand: string ="";
  model: string ="";
  price: number = 0;
  horsepower: number = 0;

}
