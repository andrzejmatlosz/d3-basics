import { Component, ViewChild } from '@angular/core';
import { ViewChildExampleChildComponent } from './../viewChildExampleChild/viewChildExampleChild.component'

@Component({
    selector: 'my-view-child-example-parent',
    templateUrl: 'app/viewChildExample/viewChildExampleParent/viewChildExampleParent.component.html',
    styleUrls: [ 'app/viewChildExample/viewChildExampleParent/viewChildExampleParent.component.css' ]
})
export class ViewChildExampleParentComponent {
    @ViewChild(ViewChildExampleChildComponent)
    private childComponent: ViewChildExampleChildComponent;

    get childValue() {
        return this.childComponent.internalValue;
    }

    set childValue(newValue: string) {
        this.childComponent.internalValue = newValue;
    }
}