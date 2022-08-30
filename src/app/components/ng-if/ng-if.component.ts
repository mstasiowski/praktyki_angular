import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

 

  ngOnInit(): void {
  }

  days =['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'];

  dogs = new Array<Dogs>();

  constructor(){
    this.dogs.push(new Dogs('PIES1',2),new Dogs('PIES2',3),new Dogs('PIES3',9),new Dogs('PIES4',11),new Dogs('PIES5',5),new Dogs('PIES6',4)),
    setTimeout(() => {this.isDisable = false;},3000);
  }
  inputText ='Tekst';
  maxLengt= 5;
  colorClass ='color';
  logoUrl ='';
  profession ='programista';
  skill ="Angular";

  isDisable = true;

  change(){
    this.inputText ='Zmiana tekstu i koloru';
    this.maxLengt = 10;
    this.colorClass = 'color2';
    this.logoUrl ='https://www.plukasiewicz.net/Common/Images/Articles/Angular/Angular8Architecture/angular-8-architecture.png'
  }

  onFocus(){
    this.colorClass ="color2";
  }

  onClick(event){
    console.log(event);
  }
  
  onMouseMove(event){
    console.log('x: '+ event.clientX +', y: '+ event.clientY)
  }

  onPaste(){
    this.inputText ="Nie wklejaj, wpisz"
  }

  change2(){
    this.isDisable = false;
  }

  // saveP(event){
  //   this.profession =event.target.value;
  // }

  // saveS(event){
  //   this.skill =event.target.value;
  // }

}
class Dogs {

  constructor(public name:string, public age:number){}
  
}