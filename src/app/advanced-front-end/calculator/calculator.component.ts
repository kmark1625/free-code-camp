import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
    moduleId: module.id,
    templateUrl: './calculator.component.html',
    providers: [CalculatorService],
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    public buttons: Array<any> = [
        {
            name: 'AC',
            method: this.AC,
            class: 'red'
        },
        {
            name: 'CE',
            value: 'dummy',
            method: this.CE,
            class: 'red'
        },
        {
            name: '/',
            method: this.operator,
            value: '/'
        },
        {
            name: 'x',
            method: this.operator,
            value: '*'
        },
        {
            name: '-',
            method: this.operator,
            value: '-'
        },
        {
            name: '+',
            method: this.operator,
            value: '+'
        },
        {
            name: '=',
            method: this.equals,
            value: '='
        },
        {
            name: '1',
            method: this.number,
            value: 1,
        },
        {
            name: '2',
            method: this.number,
            value: 2,
        },
        {
            name: '3',
            method: this.number,
            value: 3,
        },
        {
            name: '4',
            method: this.number,
            value: 4,
        },
        {
            name: '5',
            method: this.number,
            value: 5,
        },
        {
            name: '6',
            method: this.number,
            value: 6,
        },
        {
            name: '7',
            method: this.number,
            value: 7,
        },
        {
            name: '8',
            method: this.number,
            value: 8,
        },
        {
            name: '9',
            method: this.number,
            value: 9,
        },
        {
            name: '.',
            method: this.dot,
        }
    ]
    public display: string = '0';
    public total: number = 0;

    private reference = this;

    private currentOperator: string = '';

    constructor(private calculatorService: CalculatorService) {
    }

    ngOnInit() {

    }


    AC (reference) {
        let that = reference;
        that.display = '0';
        that.total = 0;
    }

    CE (reference) {
        let that = reference;
        that.display = '0';
        that.total = 0;
    }

    dot() {

    }

    equals(reference) {
        let that = reference;
        that.display = that.total;
    }

    number(reference, value) {
        let that = reference;
        if (value) {
            that.display = '' + value;
            if (that.currentOperator) {
                that.total = eval('' + that.total + that.currentOperator + value);
            } else {
                that.total = value;
            }
            that.currentOperator = '';
        } else {
            return;
        }
    }

    operator(reference, value) {
        var that = reference;
        if (that.total === 0) {
            return;
        } else if (that.currentOperator) {
            return;
        } else {
            that.currentOperator = value;
            that.display = value;
        }
    }
}
