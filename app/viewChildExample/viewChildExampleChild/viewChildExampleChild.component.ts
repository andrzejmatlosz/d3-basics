import { Component } from '@angular/core';

@Component({
    selector: 'my-view-child-example-child',
    templateUrl: 'app/viewChildExample/viewChildExampleChild/viewChildExampleChild.component.html',
    styleUrls: [ 'app/viewChildExample/viewChildExampleChild/viewChildExampleChild.component.css' ]
})
export class ViewChildExampleChildComponent {
    internalValue: string;

    setInternalValue() {
        this.internalValue = 'value set from child component';
    }
}