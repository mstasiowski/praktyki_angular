import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
carForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.carForm);
  }

  onClear() {
    this.carForm.reset();
  }

   initializeForm(){
    this.carForm = new FormGroup({
      'carBrand': new FormControl("Audio R8", Validators.required),
      'carDescription': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'carAmount': new FormControl(null),
    });
  }

}
