import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from './tic-tac-toe.service';

@Component({
    moduleId: module.id,
    templateUrl: './tic-tac-toe.component.html',
    providers: [TicTacToeService],
    styleUrls: ['./tic-tac-toe.component.css'],
    pipes: []
})
export class TicTacToeComponent implements OnInit {

    constructor(private ticTacToeService: TicTacToeService) {

    }

    ngOnInit() {

    }
}
