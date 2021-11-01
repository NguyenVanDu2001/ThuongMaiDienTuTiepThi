import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import {NavigationRoutingModule} from './navigation-routing';
@NgModule({
  imports: [
    NavigationRoutingModule
  ],
  declarations: [
    NavigationComponent,
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {

}
