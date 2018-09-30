import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent,ModalDeleteComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
//routers
const Routs: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nuevo',
    component: FormComponent
  },
  {
    path: 'nuevo/:id',
    component: FormComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    LayoutsComponent,
    ModalDeleteComponent
  ],
  entryComponents: [
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(Routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
