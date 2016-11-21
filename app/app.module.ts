
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserService } from './shared/user.service';
import { SharedDataService } from './shared/sharedData.service';

import { TitleModule } from './title/title.module';
import { MenuModule } from './menu/menu.module';
import { DetailsModule } from './details/details.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedDataExampleModule } from './sharedDataExample/sharedDataExample.module';
import { ViewChildExampleModel } from './viewChildExample/viewChildExample.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        TitleModule,
        MenuModule,
        DetailsModule,
        DashboardModule,
        SharedDataExampleModule,
        ViewChildExampleModel
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ UserService, SharedDataService ]
})
export class AppModule { }