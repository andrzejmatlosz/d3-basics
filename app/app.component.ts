import { Component } from '@angular/core';

@Component({
    selector: 'my-app-change',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {
    selectedView: string = 'dashboard';

    changeView(selectedView) {
        this.selectedView = selectedView;
    }
}