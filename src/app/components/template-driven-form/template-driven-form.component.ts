import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  title: string;
  

  constructor() {
    this.title = "Wygląda na to, że wszystko działa jak należy!"
    
 
  }

     // Flaga static jest wymagana od wersji Angular 8
  // Zmiana ta związana jest cyklem życia strony oraz dostępnością danych
  // Więcej tutaj: https://medium.com/angular-in-depth/embrace-yourself-angular-8-is-coming-1bf187c8f0bf
  @ViewChild('f', { static: false }) carForm: NgForm;

  onSubmit(form: NgForm) {
    // Przekaliśmy naszą zmienną lokalną 'f' z formularza dzięki czemu mamy dostęp do poszczególnych pól
    console.log("Marka samochodu: " + form.value.carBrand);
    console.log("Opis samochodu: " + form.value.carDescription);
    console.log("Wielkość zamówienia: " + form.value.carAmount);
  }
  
  onClear() {
    this.carForm.reset();
  }
  ngOnInit() {
  }
}
