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
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.left - this.margin.right;
        this.paintLayer = this.svg.append('g')
            .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
    }

    addAxis() {
        let maxX = d3.max(this.points.map(point => point.x));
        let maxY = d3.max(this.points.map(point => point.y));
        this.xScale = d3.scaleLinear()
            .domain([0, maxX + 0.1 * maxX])
            .range([0, this.width]);
        this.yScale = d3.scaleLinear()
            .domain([0, maxY + 0.1 * maxY])
            .range([this.height, 0]);
        this.paintLayer.append('g')
            .attr('transform', `translate(0,${this.height})`)
            .attr('class', 'x axis')
            .call(d3.axisBottom(this.xScale));
        this.paintLayer.append('g')
            .attr('class', 'y axis')
            .call(d3.axisLeft(this.yScale));
    }

    addLine() {
        let line: any = d3.line()
            .x((d: any) => this.xScale(d.x))
            .y((d: any) => this.yScale(d.y));
        this.paintLayer.append("path")
            .data([this.points])
            .attr('class', 'line')
            .attr('d', line);
    }

    addCrosshair() {
        let svg = this.svg.style;
        let xScale = this.xScale;
        let paintLayer = this.paintLayer;
        let height = this.height;

        let overlay = this.paintLayer.append("rect")
            .attr("class", "overlay")
            .attr("width", this.width)
            .attr("height", this.height);

        overlay.on('mousemove', function() {
                paintLayer.select('.crosshair-line').remove();
                let x = d3.mouse(this as any)[0];
                paintLayer.append('line')
                    .attr('class', 'crosshair-line')
                    .attr('x1', x)
                    .attr('x2', x)
                    .attr('y1', 0)
                    .attr('y2', height)
                    .style('stroke', 'gray')
                    .style('stroke-width', 1);
            })
            .on('mouseout', function() {
                paintLayer.select('.crosshair-line').remove();
            });
    }
}