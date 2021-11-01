import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
// import { NoAuthGuard } from './no-auth-guard.service';

const routes: Routes = [
  {
    path: 'demoadmin',
    component: NavigationComponent,
  //  canActivate: [NoAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
