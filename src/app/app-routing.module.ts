import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBlocksComponent } from './components/page-blocks/page-blocks.component';
import { PageTableComponent } from './components/page-table/page-table.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';

const routes: Routes = [
  {path: 'blocks',  component: PageBlocksComponent},
  {path: 'table',  component: PageTableComponent},
  {path: 'detail/:login',  component: PageDetailComponent},
  {path: '**', redirectTo: 'blocks', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
