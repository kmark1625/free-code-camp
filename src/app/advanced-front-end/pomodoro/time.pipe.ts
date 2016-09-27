import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
    transform(time: number): string {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        return minutes + ' : ' + seconds;
    }

}
