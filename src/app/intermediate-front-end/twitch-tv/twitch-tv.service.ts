import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitchTvService {
     private streamers: Array<string> = [
        'ESL_SC2',
        'OgamingSC2',
        'cretetion',
        'freecodecamp',
        'storbeck',
        'habathcx',
        'RobotCaleb',
        'noobs2ninjas',
        'brunofin',
        'comster404'
    ];

    constructor(private http: Http, private jsonp: Jsonp) {
    }

    getStreamerInfo() {
        let observableBatch = [];
        let url: string;
        let queryString: string;
        for (let i = 0; i < this.streamers.length; i++) {
            queryString = '?callback=JSONP_CALLBACK';
            url = 'https://api.twitch.tv/kraken/streams/' +
                this.streamers[i] + '/' + queryString;
            observableBatch.push( this.jsonp.request(url, {method: 'Get'})
            .map(response => {
                let body = response.json();
                body.channelName = this.streamers[i];
                return body;
            }));
        }
        return Observable.forkJoin(observableBatch);
    }
}
