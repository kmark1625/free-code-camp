import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuoteMachineService {
    constructor(private http: Http) {
    }

    getQuote(): Observable<string> {
        return this.http.get('http://api.icndb.com/jokes/random')
            .map(response => {
                let body = response.json();
                return body.value.joke;
            });
    }
}
