import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {NgForComponent} from './components/ng-for/ng-for.component';
import {NgSwitchComponent} from './components/ng-switch/ng-switch.component';
import {PropertybindingComponent} from "./components/propertybinding/propertybinding.component";
import {EventBindingComponent} from "./components/event-binding/event-binding.component";
import {TwoWayBindingComponent} from "./components/two-way-binding/two-way-binding.component";
import {ReactiveFormComponent} from "./components/reactive-form/reactive-form.component";
import {TemplateDrivenFormComponent} from "./components/template-driven-form/template-driven-form.component";
import {NgIfComponent} from  "./components/ng-if/ng-if.component";
import {ApptutorialComponent} from "./components/apptutorial/apptutorial.component";
import {ChildComponent} from "./components/child/child.component";
import {ApiHttpComponent} from "./components/api-http/api-http.component";

const routes: Routes = [
  {path:"",component:LayoutComponent},
  {path:"ngfor",component:NgForComponent},
  {path:"ngswitch",component:NgSwitchComponent},
  {path:"propertybinding",component:PropertybindingComponent},
  {path:"eventbinding",component:EventBindingComponent},
  {path:"twowaybinding",component:TwoWayBindingComponent},
  {path:"reactiveform",component:ReactiveFormComponent},
  {path:"templateform",component:TemplateDrivenFormComponent},
  {path:"ngifform",component:NgIfComponent},
  {path:"apptut",component:ApptutorialComponent},
  {path:"child", component:ChildComponent},
  {path:"api", component:ApiHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
