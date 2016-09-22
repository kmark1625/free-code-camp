import { Component, OnInit } from '@angular/core';
import { PomodoroService } from './pomodoro.service';

@Component({
    moduleId: module.id,
    templateUrl: './pomodoro.component.html',
    providers: [PomodoroService],
    styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

    public breakLength: number = 5;
    public sessionLength: number = 25;
    public time;

    constructor(private pomodoroService: PomodoroService) {

    }

    ngOnInit() {

    }

    start() {

    }
}
