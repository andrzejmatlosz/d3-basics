import { Injectable } from '@angular/core';
import * as d3 from 'd3';

interface Point {
    x: number;
    y: number;
};

interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

@Injectable()
export class D3Chart {
    svg: d3.Selection<Element, any, HTMLElement, any>;
    paintLayer: d3.Selection<d3.BaseType, any, HTMLElement, any>;
    margin: Margin = { top: 20, right: 20, bottom: 30, left: 40 };
    points: Array<Point> = [ 
        { x: 10, y: 20 },
        { x: 15, y: 40 },
        { x: 21, y: 7 },
        { x: 24, y: 36 },
        { x: 36, y: 31 },
        { x: 45, y: 3 },
        { x: 50, y: 15 }
    ];
    xScale: d3.ScaleLinear<number, number>;
    yScale: d3.ScaleLinear<number, number>;
    width: number;
    height: number;

    createVisualization() {
        this.svg = d3.select<Element, any>('.chart-svg');
        // this.width = 
        // this.height = 
        // this.paintLayer = 
    }

    addAxis() {
        let maxX = d3.max(this.points.map(point => point.x));
        let maxY = d3.max(this.points.map(point => point.y));
        // this.xScale = 
        // this.yScale = 
        // draw axis
    }

    addLine() {
        // let line: any = 
        // this.paintLayer.append(
    }

    addCrosshair() {
        let paintLayer = this.paintLayer;
        let height = this.height;

        // let overlay = 

        // overlay.on(
    }
}