import { NgModule } from '@angular/core';

import { ViewChildExampleParentComponent }   from './viewChildExampleParent/viewChildExampleParent.component';
import { ViewChildExampleChildComponent }   from './viewChildExampleChild/viewChildExampleChild.component';

@NgModule({
    exports: [ ViewChildExampleParentComponent ],
    declarations: [ ViewChildExampleParentComponent, ViewChildExampleChildComponent ]
})
export class ViewChildExampleModel { }