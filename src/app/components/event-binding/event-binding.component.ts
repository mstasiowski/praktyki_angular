import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  brand: string;
  model: string;
  imageUrl: string;

  constructor() { 
    this.brand = "Audi";
    this.model = "RS6";
    this.imageUrl = "https://image.shutterstock.com/z/stock-photo-london-england-audi-rs-avant-performance-estate-car-parked-in-mayfair-ditrict-of-694886881.jpg"
  }

  ngOnInit(): void {
  }

  buyCar($event:any){
    console.log("Gratulacje,właśnie kupiłeś" + this.brand + " " + this.model, $event);
  }
}
