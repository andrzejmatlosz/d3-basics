import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-menu',
    templateUrl: 'app/menu/menu.component.html',
    styleUrls: [ 'app/menu/menu.component.css' ]
})
export class MenuComponent {
    selectedView: string;

    @Output() viewChanged: EventEmitter<string>;

    constructor() {
        this.viewChanged = new EventEmitter<string>();
    }

    changeView(selectedView) {
        this.viewChanged.emit(selectedView);
        this.selectedView = selectedView;
    }
}