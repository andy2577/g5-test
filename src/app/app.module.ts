import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageBlocksComponent } from './components/page-blocks/page-blocks.component';
import { PageTableComponent } from './components/page-table/page-table.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavigationBarComponent,
    PageBlocksComponent,
    PageTableComponent,
    PageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
