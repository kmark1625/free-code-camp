import { Component, OnInit } from '@angular/core';
import { SimonSaysService } from './simon-says.service';

@Component({
    moduleId: module.id,
    templateUrl: './simon-says.component.html',
    providers: [SimonSaysService],
    styleUrls: ['./simon-says.component.css'],
    pipes: []
})
export class SimonSaysComponent implements OnInit {

    constructor(private simonSaysService: SimonSaysService) {

    }

    ngOnInit() {

    }
}
