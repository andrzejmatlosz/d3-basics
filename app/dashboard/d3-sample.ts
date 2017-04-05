import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Sample {
    svg: d3.Selection<Element, any, HTMLElement, any>;
    data: Array<number> = [ 160, 40, 210, 180 ];

    createVisualization() {
        this.svg = d3.select<Element, any>("svg");
    }

    setEqualSize() {
        this.svg.selectAll('rect')
            .attr('height', 50)
            .attr('width', 50)
            .style("fill", "antiquewhite");
    }

    private setParams(rect) {
        rect.attr("x", 10)
            .attr("y", (data, index) => index * 30 + 30 )
            .attr("width", (data, index) => data )
            .attr("height", 20)
            .style("fill", "antiquewhite");
    }

    setWidthAsData() {
        let selection = this.svg.selectAll('rect')
            .data(this.data)
            .call(this.setParams);

        selection.enter().append('rect').call(this.setParams);
    }

    updateData() {
        this.data[1] = 300;
        this.data[3] = 280;
        this.svg.selectAll('rect')
            .data(this.data)
            .transition()
            .duration(1500) 
            .call(this.setParams);
    }

    removeData() {
        this.data.splice(1, 1);
        this.data.splice(2, 1);
        this.svg.selectAll('rect')
            .data(this.data as any, data => data as any)
            .exit()
            .transition()
            .duration(1500)
            .attr('width', 0)
            .remove();
    }

    setCircles() {
        let coordinates = (data, index) => index * 30 + 30;
        this.svg.selectAll("rect")
            .remove();
        let circles = this.svg.selectAll("circle")
            .data(this.data).enter()
                .append('circle')
            .attr("cx", coordinates)
            .attr("cy", coordinates)
            .attr("r", (data, index) => data / 10 )
            .style("fill", "antiquewhite")
            .style("stroke", "black")
            .style("stroke-width", 2);
    }

    private interactions(element) {
        element.on('mouseover', function() {
            d3.select(this)
                .style("stroke-width", 4);
        })
        .on('mouseout', function() {
            d3.select(this)
                .style("stroke-width", 2);
        })
        .on('click', function() {    
            d3.select(this)
                .style("fill", "yellow");
        });
    }

    addInteractions() {
        this.svg.selectAll("rect").call(this.interactions);
        this.svg.selectAll("circle").call(this.interactions);
    }
}