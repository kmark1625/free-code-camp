import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalWeatherService {
    constructor(private http: Http) {
    }

}
