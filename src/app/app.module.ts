import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    P1Component,
    P2Component,
    P3Component,
    AppComponent,
    AppRoutingModule,
    NgFor

  ]
})
export class AppModule { }
