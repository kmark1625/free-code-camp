import { Component, OnInit } from '@angular/core';
import { LocalWeatherService } from './local-weather.service';
import { UnitsPipe } from './units.pipe';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    templateUrl: './local-weather.component.html',
    providers: [LocalWeatherService],
    pipes: [UnitsPipe]
})
export class LocalWeatherComponent implements OnInit {
    public temperature: number; // Kelvin
    private temperatureUnits: string = 'C'; // Celcius or Fahrenheit
    public weatherClassification: string;

    constructor(private localWeatherService: LocalWeatherService) {
        this.temperatureUnits = 'C';
    }

    ngOnInit() {
        this.getLocalWeather();
    }

    classifyWeather(): void {
        let temp = this.temperature - 273.15;
        if (temp > 80) {
             this.weatherClassification = 'hot';
        } else {
            this.weatherClassification = 'cold';
        }
    }

    getLocalWeather(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let longitude = Math.trunc(position.coords.longitude);
                let latitude = Math.trunc(position.coords.latitude);
                this.localWeatherService.getTemperature(latitude, longitude)
                    .subscribe((temp) => {
                        this.temperature = temp;
                        this.classifyWeather()
                    });
            });
        }
    }

    toggleUnits(): void {
        this.temperatureUnits = this.temperatureUnits === 'C' ? 'F' : 'C';
    }
}
