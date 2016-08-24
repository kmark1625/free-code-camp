import { Component, OnInit } from '@angular/core';
import { LocalWeatherService } from './local-weather.service';

@Component({
    moduleId: module.id,
    templateUrl: './local-weather.component.html',
    providers: [LocalWeatherService]
})
export class LocalWeatherComponent implements OnInit {
    temperatureUnits: string; // Celcius or Fahrenheit

    constructor(private quoteMachineService: LocalWeatherService) {
        this.temperatureUnits = 'celcius';
    }

    ngOnInit() {
    }

    classifyWeather(temperature): string {
        if (temperature > 80) {
             return 'hot';
        } else {
            return 'cold';
        }
    }

    getCurrentLocation(): string {
        return 'current_location';
    }
}
