import { Component } from '@angular/core';
import { SharedDataService } from './../shared/sharedData.service';

@Component({
    selector: 'my-shared-data-example',
    templateUrl: 'app/sharedDataExample/sharedDataExample.component.html'
})
export class SharedDataExampleComponent {
    sharedData: Array<string> = [];

    constructor(private sharedDataService: SharedDataService) {
        this.sharedDataService.getSharedData().subscribe(
            newValue => {
                this.sharedData.push(newValue);
            }
        )
    }
}