import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikipediaViewerService {
    constructor(private http: Http, private jsonp: Jsonp) {
    }

    searchWikipedia(searchTerm: string) {
        let url: string = 'http://en.wikipedia.org/w/api.php?action=query'
        + '&format=json&list=search&srsearch=' + searchTerm + '&callback=JSONP_CALLBACK';
        return this.jsonp.request(url, { method: 'Get' })
            .map(response => response.json().query.search);
    }
}
