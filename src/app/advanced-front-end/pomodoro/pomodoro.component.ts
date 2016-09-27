import { Component, OnInit } from '@angular/core';
import { PomodoroService } from './pomodoro.service';
import { TimePipe } from './time.pipe';

@Component({
    moduleId: module.id,
    templateUrl: './pomodoro.component.html',
    providers: [PomodoroService],
    styleUrls: ['./pomodoro.component.css'],
    pipes: [TimePipe]
})
export class PomodoroComponent implements OnInit {

    public breakLength: number = 5;
    public sessionLength: number = 25;
    public timeRemaining: number = 25 * 60;
    public startTime: number;
    public started: boolean;
    public displayTime: number = 25 * 60;
    public intervalId: number;

    constructor(private pomodoroService: PomodoroService) {

    }

    ngOnInit() {

    }

    handleTimer() {
        !this.started ? this.startTimer() : this.stopTimer();
    }

    startTimer() {
        this.startTime = new Date().getTime() / 1000;
        this.started = true;
        this.intervalId = setInterval(() => {
            let currTime = new Date().getTime() / 1000;
            this.timeRemaining = this.timeRemaining - (currTime - this.startTime);
            this.startTime = currTime;
        }, 100);
    }

    stopTimer() {
        this.started = false;
        clearInterval(this.intervalId);
    }
}
