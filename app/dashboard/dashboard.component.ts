import { D3Sample } from './d3-sample';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: [ 'app/dashboard/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    constructor(private d3Sample: D3Sample) {
        
    }

    ngOnInit() {
        this.d3Sample.createVisualization();
    }

    makeSimpleChanges() {
        this.d3Sample.setEqualSize();
    }

    setWidthAsData() {
        this.d3Sample.setWidthAsData();
    }

    updateData() {
        this.d3Sample.updateData();
    }

    removeData() {
        this.d3Sample.removeData();
    }

    setCircles() {
        this.d3Sample.setCircles();
    }

    addInteractions() {
        this.d3Sample.addInteractions();
    }
}
