import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { SharedDataExampleComponent }   from './sharedDataExample.component';
import { SharedDataInput1Component }   from './sharedDataInput1/sharedDataInput1.component';
import { SharedDataInput2Component }   from './sharedDataInput2/sharedDataInput2.component';

@NgModule({
    imports: [ CommonModule ],
    exports: [ SharedDataExampleComponent ],
    declarations: [ SharedDataExampleComponent, SharedDataInput1Component, SharedDataInput2Component ]
})
export class SharedDataExampleModule { }
