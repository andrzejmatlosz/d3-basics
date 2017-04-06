import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Sample {
    svg: d3.Selection<Element, any, HTMLElement, any>;
    data: Array<number> = [ 160, 40, 210, 360, 70 ];

    createVisualization() {
        this.svg = d3.select<Element, any>("svg");
    }

    setEqualSize() {
        // set size of all rects to 50x50 and fill to antiquewhite 
        this.svg.selectAll('rect')
            .attr('width', 50)
            .attr('height', 50)
            .style('fill', 'antiquewhite');
    }

    private setParams(rect) {
        rect.attr('x', 10)
            .attr('height', 20)
            .attr('width', (data, index) => { return data; })
            .attr('y', (data, index) => 10 + index * 30);
    }

    setWidthAsData() {
        let bindedData = this.svg.selectAll('rect')
            .data(this.data);

        bindedData.call(this.setParams);

        bindedData.enter()
            .append('rect')
            .call(this.setParams);

        bindedData.exit()
            .remove();
    }

    updateData() {
        this.data[1] = 300;
        this.data[3] = 280;

        this.svg.selectAll('rect')
            .data(this.data)
            .transition()
            .duration(1500)
            .attr('width', data => data);
    }

    removeData() {
        //rect(__data__ = 160) 
        //rect(__data__ = 40) 
        //rect(__data__ = 210) 
        //rect(__data__ = 360) 
        //rect(__data__ = 70)
        
        //[ 160, 40, 210, 360, 70 ]

        this.data.splice(1, 1); //[ 160, 210, 360, 70 ]
        this.data.splice(2, 1);

        //[ 160, 210, 70 ]
        // rect(160) !rect rect(210) !rect! rect(70)
        
        let bindedData = this.svg.selectAll('rect')
            .data(this.data as any, data => {
                console.log(data);
                let temp = (((data as number) + 100) as any);
                console.log(temp);
                return temp;
            });

        console.log('before exit');
        bindedData
            .exit().remove();
        console.log('after exit');

        bindedData.call(this.setParams);
    }

    setCircles() {
        // remove rects
        this.svg.selectAll('rect')
            .remove();

        // add circles
        this.svg.selectAll('circle')
            .data(this.data)
            .enter()
            .append('circle')
            .attr('cx', (d, i) => 50 + i * 100)
            .attr('cy', 100)
            .attr('r', d => d / 10)
            .style('fill', 'antiquewhite');
    }

    private interactions(element) {
        element.on('mouseover', function() {
            d3.select(this).style('stroke-width', 4);
        })
        .on('mouseout', function() {
            d3.select(this).style('stroke-width', 2);
        })
        .on('click', function() {    
            d3.select(this).style('fill', 'yellow');
        });
    }

    addInteractions() {
        this.svg.selectAll('rect')
            .call(this.interactions);

        this.svg.selectAll('circles')
            .call(this.interactions);

        // add interactions into all rects and all circles
    }
}