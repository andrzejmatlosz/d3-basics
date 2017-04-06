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
        { x: -10, y: 20 },
        { x: -15, y: 40 },
        { x: 21, y: 7 },
        { x: 24, y: -36 },
        { x: 36, y: -31 },
        { x: 45, y: 3 },
        { x: 50, y: 15 }
    ];
    xScale: d3.ScaleLinear<number, number>;
    yScale: d3.ScaleLinear<number, number>;
    width: number;
    height: number;

    createVisualization() {
        this.svg = d3.select<Element, any>('.chart-svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.paintLayer = this.svg.append('g')
            .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
    }

    addAxis() {
        let minX = d3.min(this.points.map(point => point.x));
        let maxX = d3.max(this.points.map(point => point.x));
        let maxY = d3.max(this.points.map(point => point.y));
        let minY = d3.min(this.points.map(point => point.y));

        this.xScale = d3.scaleLinear()
            .domain([minX, maxX])
            .range([0, this.width]);
        
        this.yScale = d3.scaleLinear()
            .domain([minY, maxY])
            .range([this.height, 0]);

        this.paintLayer
            .append('g')
            .attr('transform', `translate(0,${this.yScale(0)})`)
            .call(d3.axisBottom(this.xScale));

        this.paintLayer
            .append('g')
            .attr('transform', `translate(${this.xScale(0)},0)`)
            .call(d3.axisLeft(this.yScale));
    }

    addLine() {
        let line: any = d3.line()
            .x((data: any) => this.xScale(data.x))
            .y((data: any) => this.yScale(data.y));

        this.paintLayer.append('path')
            .data([this.points])
            .attr('class', 'line')
            .attr('d', line);
    }

    addCrosshair() {
        let paintLayer = this.paintLayer;
        let height = this.height;
        let xMouse;

        let overlay = this.paintLayer.append('rect')
            .attr('class', 'overlay')
            .attr('width', this.width)
            .attr('height', this.height);

        let lineAttr = (line) => {
            line.attr('x1', xMouse)
                .attr('x2', xMouse);
        }

        overlay.on('mouseover', function() {
            xMouse = d3.mouse(this as any)[0];
            paintLayer.append('line')
                .attr('class', 'crosshair-line')
                .attr('y1', 0)
                .attr('y2', height)
                .call(lineAttr);
        })
        .on('mousemove', function() {
            xMouse = d3.mouse(this as any)[0];
            paintLayer.select('.crosshair-line')
                .call(lineAttr);
        })
        .on('mouseout', function() {
            paintLayer.select('.crosshair-line').remove();
        });
    }
}