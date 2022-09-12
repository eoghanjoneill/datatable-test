import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsDatatableComponent } from './tabs-datatable/tabs-datatable.component';
import { NoTabsDatatableComponent } from './no-tabs-datatable/no-tabs-datatable.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxDatatableModule,    
    MatTabsModule,
    BrowserAnimationsModule
    ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    TabsDatatableComponent,
    NoTabsDatatableComponent 
  ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
