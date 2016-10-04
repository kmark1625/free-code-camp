import {
    Component,
    OnInit,
    OnChanges,
    AfterViewInit,
    Input,
    ElementRef,
    ViewChild
} from '@angular/core';
import { BarChartConfig } from './bar-chart-config';
// import * as d3 from 'd3';
import * as Moment from 'moment';

@Component({
    selector: 'bar-chart-component',
    moduleId: module.id,
    templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
    @Input() config: Array<BarChartConfig>;
    @ViewChild('container') element: ElementRef;

    constructor() { }

    ngOnInit () {
        // console.log(d3);
        // var w = 960, h = 500;
        // var svg = d3.select('#chart')
        //     .append('svg')
        //     .attr('width', w)
        //     .attr('height', h);

        // var text = svg
        //     .append('text')
        //     .text('hello world')
        //     .attr('y', 50);
    }
}
