import { D3Chart } from './d3-chart';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-chart',
    templateUrl: 'app/chart/chart.component.html',
    styleUrls: [ 'app/chart/chart.component.css' ]
})
export class ChartComponent implements OnInit {
    constructor(private d3Chart: D3Chart) {
        
    }

    ngOnInit() {
        this.d3Chart.createVisualization();
    }

    addAxis() {
        this.d3Chart.addAxis();
    }

    addLine() {
        this.d3Chart.addLine();
    }

    addCrosshair() {
        this.d3Chart.addCrosshair();
    }
}