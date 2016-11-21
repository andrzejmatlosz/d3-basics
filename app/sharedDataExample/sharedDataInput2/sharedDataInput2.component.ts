import { Component } from '@angular/core';
import { SharedDataService } from './../../shared/sharedData.service';

@Component({
    selector: 'shared-data-input2',
    templateUrl: 'app/sharedDataExample/sharedDataInput2/sharedDataInput2.component.html'
})
export class SharedDataInput2Component {
    constructor(private _sharedDataService: SharedDataService) { }

    addSharedData() {
        this._sharedDataService.addData('BBB');
    }
}