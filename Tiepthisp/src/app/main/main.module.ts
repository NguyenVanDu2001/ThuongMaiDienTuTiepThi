import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../share/banner/banner.component';
import { HeaderComponent } from '../share/header/header.component';
import { SlideComponent } from '../share/slide/slide.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../share/footer/footer.component';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { BycategoryComponent } from './bycategory/bycategory.component';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { EventComponent } from './event/event.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'detail/:id/:idcat',
        component: DetailComponent,
      },
      {
        path: 'bycategory/:id/:name_cate',
        component: BycategoryComponent,
      },
      {
        path: 'san-pham-hot',
        component: HotComponent,
      },
      {
        path: 'san-pham-new',
        component: NewComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      }
    ],
  },
];
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SlideComponent,
    MainComponent,
    BannerComponent,
    FooterComponent,
    DetailComponent,
    BycategoryComponent,
    HotComponent,
    NewComponent,
    EventComponent
  ],
  imports: [ShareModule, CommonModule, RouterModule.forChild(mainRoutes)],
})
export class MainModule {}
