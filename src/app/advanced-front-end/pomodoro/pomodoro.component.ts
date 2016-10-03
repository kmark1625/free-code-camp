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
    public mode: string = 'session';

    public editable: boolean = true;

    constructor(private pomodoroService: PomodoroService) {

    }

    ngOnInit() {

    }

    adjust(timerName, value: number) {
        if (this.editable) {
              timerName === 'session' ? this.sessionLength += value : this.breakLength += value;
              if (this.mode === timerName) {
                  this.timeRemaining += value * 60;
              }
        }
    }

    changeMode() {
        if (this.mode === 'session') {
            this.mode = 'break';
            this.timeRemaining = this.breakLength * 60;
        } else if (this.mode === 'break') {
            this.mode = 'session';
            this.timeRemaining = this.sessionLength * 60;
        }
    }

    handleTimer() {
        !this.started ? this.startTimer() : this.stopTimer();
    }

    startTimer() {
        this.editable = false;
        this.startTime = new Date().getTime() / 1000;
        this.started = true;
        this.intervalId = setInterval(() => {
            let currTime = new Date().getTime() / 1000;
            this.timeRemaining = this.timeRemaining - (currTime - this.startTime);
            this.startTime = currTime;
            if (this.timeRemaining <= 0) {
                this.changeMode()
            }
        }, 100);
    }

    stopTimer() {
        this.editable = true;
        this.started = false;
        clearInterval(this.intervalId);
    }
}
