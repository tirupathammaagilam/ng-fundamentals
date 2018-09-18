import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from '../index/index.component';

import { DisplayDataInTemplateComponent } from '../components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from '../components-templates/display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from '../components-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from '../components-templates/custom-events/custom-events.component';

const appRoutes: Routes = [
  { path: 'index', component:  IndexComponent },

  /* Components - Templates */
  { path: 'components-templates/display-data-in-template', component:  DisplayDataInTemplateComponent },
  { path: 'components-templates/display-data-in-template-url', component:  DisplayDataInTemplateUrlComponent },
  { path: 'components-templates/template-syntax', component:  TemplateSyntaxComponent },
  { path: 'components-templates/template-syntax/custom-events', component:  CustomEventsComponent },
 
  /* Default path and wild match routes */  
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [PageNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
