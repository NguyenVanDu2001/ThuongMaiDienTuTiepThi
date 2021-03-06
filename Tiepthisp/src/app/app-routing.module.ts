import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import{MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
