import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageBlocksComponent } from './components/page-blocks/page-blocks.component';
import { PageTableComponent } from './components/page-table/page-table.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { GithubUsersService } from './services/github-users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PageBlocksComponent,
    PageTableComponent,
    NavigationBarComponent,
    PageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    GithubUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
