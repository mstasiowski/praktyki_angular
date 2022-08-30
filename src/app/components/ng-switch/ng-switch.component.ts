import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  title: string;
  isTimeForThisComponent: boolean;
  cars: Cars[];
  selectedCar: number;

  constructor() { 
    this.isTimeForThisComponent = true;

    if(this.isTimeForThisComponent)
    {
      this.title = "Tematem tego wpisu jest dyrektywa ng-switch";
    } else {
      this.title = 'Temat tego wpisu nie dotyczy dyrektywy ng-switch';
    }

    this.cars = [
      {id: 1, name: 'Audi RS6 C7'},
      {id: 2, name: 'Pagani Zonda F Roadster'},
      {id: 3, name: 'Nissan GTR R34'}
    ];
    this.selectedCar = 1;


  }


  ngOnInit(): void {
  }

}

class Cars {
  id: number = 0;
  name: string = "";
}
