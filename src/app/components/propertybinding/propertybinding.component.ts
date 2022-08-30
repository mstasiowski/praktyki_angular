import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  imageUrl = "https://image.shutterstock.com/z/stock-photo-london-england-audi-rs-avant-performance-estate-car-parked-in-mayfair-ditrict-of-694886881.jpg";
  title = "Krótkie przypomnienie poprzedniego wpisu";
  brand ="Audi";
  model ="RS6";
  power: number = 580;

  //1 KM TO 0,74KW

  converter: number = 0.74;

 // Metoda dokonująca konwersji KM na kW
 convertKMtokW() {
  return this.power * this.converter;
}

  constructor() { }

  ngOnInit(): void {
  }

}
