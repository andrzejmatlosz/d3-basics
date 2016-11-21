import { Component } from '@angular/core';
import { SharedDataService } from './../../shared/sharedData.service';

@Component({
    selector: 'shared-data-input1',
    templateUrl: 'app/sharedDataExample/sharedDataInput1/sharedDataInput1.component.html'
})
export class SharedDataInput1Component {
    constructor(private _sharedDataService: SharedDataService) { }

    addSharedData() {
        this._sharedDataService.addData('AAA');
    }
}