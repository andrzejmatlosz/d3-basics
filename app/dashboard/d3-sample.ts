import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Sample {
    svg: d3.Selection<Element, any, HTMLElement, any>;
    data: Array<number> = [ 160, 40, 210 ];

    createVisualization() {
        this.svg = d3.select<Element, any>("svg");
    }

    setEqualSize() {
        // set size of all rects to 50x50 and fill to antiquewhite 
    }

    private setParams(rect) {
        // set parameters of rect to 
        // x: 10, 
        // y: adjusted to index of rect
        // width: set to value from domain
        // height: 20
        // fill: antiquewhite
    }

    setWidthAsData() {
        // set width according to data
    }

    updateData() {
        this.data[1] = 300;
        this.data[3] = 280;
        // update first and third rects
    }

    removeData() {
        this.data.splice(1, 1);
        this.data.splice(2, 1);
        // remove first and third rects
        // add animation for removing
    }

    setCircles() {
        // remove rects
        // add circles
    }

    private interactions(element) {
        element.on('mouseover', function() {
            // set stroke width of selected element to 4 
        })
        .on('mouseout', function() {
            // set stroke width of selected element to 2
        })
        .on('click', function() {    
            // set fill of selected element to yellow
        });
    }

    addInteractions() {
        // add interactions into all rects and all circles
    }
}