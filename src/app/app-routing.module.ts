import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NoTabsDatatableComponent } from './no-tabs-datatable/no-tabs-datatable.component';
import { TabsDatatableComponent } from './tabs-datatable/tabs-datatable.component';

const routes: Routes = [
  { path: 'tabs', component: TabsDatatableComponent },
  { path: 'no-tabs', component: NoTabsDatatableComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }