import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalWeatherService {
    private apiKey: string = 'bc407f04195225a02de7587d10e51f03';

    constructor(private http: Http) {
    }

    getTemperature(latitude: number, longitude: number): Observable<number> {
        let queryString: string = '?lat=' + latitude + '&lon=' + longitude + '&APPID=' + this.apiKey;
        return this.http.get('http://api.openweathermap.org/data/2.5/weather' + queryString)
            .map(response => {
                let body = response.json();
                return body.main.temp;
            });
    }
}
