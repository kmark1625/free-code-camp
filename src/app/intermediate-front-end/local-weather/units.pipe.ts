import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'units'})
export class UnitsPipe implements PipeTransform {
    transform(kelvin: number, units: string): number {
        console.log('units:');
        console.log(units);
        if (units === 'C') {
            console.log('in celsius');
            return kelvin - 273.15;
        } else if (units === 'F') {
            return kelvin * (9 / 5) - 459.67;
        } else {
            return kelvin;
        }
    }
} 