import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchboxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ],
})
export class GifsModule { }
