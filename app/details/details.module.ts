import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsContainerComponent } from './detailsContainer.component';
import { DetailsAuthorComponent } from './detailsAuthor/detailsAuthor.component';
import { DetailsVersionComponent } from './detailsVersion/detailsVersion.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ 
        DetailsContainerComponent, 
        DetailsAuthorComponent, 
        DetailsVersionComponent 
    ],
    exports: [ DetailsContainerComponent ]
})
export class DetailsModule { }