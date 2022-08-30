import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxFilterOptions} from 'primeng/listbox';



interface Country {
    name: string,
    code: string
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  countries: Country[];

    selectedCountries: Country[] = [];

    filterValue = '';

    disabled: boolean = true;
  
    value1: string ="";

    value2: string="";

    value3: string="";

    value4: string="";

    value5: string = 'Disabled';


    constructor() {
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];
    }
    
    // myResetFunction(options: MultiSelectFilterOptions) {
    //     options.reset();
    //     this.filterValue = '';
    // }

  ngOnInit(): void {
  }

}
