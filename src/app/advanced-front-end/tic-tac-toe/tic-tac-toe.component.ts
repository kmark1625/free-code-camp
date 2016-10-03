import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from './tic-tac-toe.service';

export class Player {
    public marker: string;

    constructor(marker) {
        this.marker = marker;
    }
}

@Component({
    moduleId: module.id,
    templateUrl: './tic-tac-toe.component.html',
    providers: [TicTacToeService],
    styleUrls: ['./tic-tac-toe.component.css'],
    pipes: []
})
export class TicTacToeComponent implements OnInit {
    public board = [new Array(3), new Array(3), new Array(3)];

    constructor(private ticTacToeService: TicTacToeService) {

    }

    ngOnInit() {

    }

    makeMove(row, column, player) {
        this.board[row][column] = player.marker;
    }
}
