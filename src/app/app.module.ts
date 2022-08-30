import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';

import {AccordionModule} from 'primeng/accordion';    
import {MenuItem} from 'primeng/api';  
import {ListboxModule} from 'primeng/listbox';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { ApptutorialComponent } from './components/apptutorial/apptutorial.component';
import { ChildComponent } from './components/child/child.component';
import { AddTaskTutComponent } from './components/add-task-tut/add-task-tut.component';
import { TodoTaskTutComponent } from './components/todo-task-tut/todo-task-tut.component';
import { DoneTaskTutComponent } from './components/done-task-tut/done-task-tut.component';
import { TaskService } from './services/task.service';
import { CheckedDirective } from './Shared/checked.directive';
import { DateDirective } from './Shared/date.directive';
import { TransformTaskPipe } from './Shared/transform-task.pipe';
import { SortNamePipe } from './Shared/sort-name.pipe';
import { ApiHttpComponent } from './components/api-http/api-http.component';
import {HttpClientModule} from "@angular/common/http";
import { HttpService } from './services/http.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NgForComponent,
    NgSwitchComponent,
    PropertybindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    NgIfComponent,
    ApptutorialComponent,
    ChildComponent,
    AddTaskTutComponent,
    TodoTaskTutComponent,
    DoneTaskTutComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    ApiHttpComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ListboxModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    


    
  ],
  providers: [TaskService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
