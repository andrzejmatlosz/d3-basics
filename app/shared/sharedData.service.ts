import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedDataService {
    private sharedDataSource = new Subject<string>();

    constructor() {
        console.log('create shared data service');
    }

    getSharedData() {
        return this.sharedDataSource.asObservable();
    }

    addData(value: string) {
        this.sharedDataSource.next(value);
    }
}