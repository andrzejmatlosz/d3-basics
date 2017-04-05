import { D3Chart } from './chart/d3-chart';
import { D3Sample } from './dashboard/d3-sample';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuModule } from './menu/menu.module';
import { ChartModule } from './chart/chart.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        MenuModule,
        ChartModule,
        DashboardModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ 
        D3Sample,
        D3Chart 
    ]
})
export class AppModule { }