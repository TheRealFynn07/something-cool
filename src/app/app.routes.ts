import { RouterModule, Routes } from '@angular/router';
import { P1Component } from './p1/p1.component';
import { NgModule } from '@angular/core';
import { P2Component } from './p2/p2.component';

export const routes: Routes = [
    {path: 'p1', component: P1Component},
    {path: 'p2', component: P2Component},
    /* {path: 'p3', component: P3Component} */
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), P2Component],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  