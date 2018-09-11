import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { OperatorsDemoComponent } from './operators-demo/operators-demo.component';
import { DifferentOperatorsComponent } from './different-operators/different-operators.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ObservablesDemoComponent, SubjectDemoComponent, OperatorsDemoComponent, DifferentOperatorsComponent]
})
export class RxDemoModule { }
