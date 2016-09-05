import { Component, OnInit } from '@angular/core';
import { WikipediaViewerService } from './wikipedia-viewer.service';

@Component({
    moduleId: module.id,
    templateUrl: './wikipedia-viewer.component.html',
    providers: [WikipediaViewerService],
    directives: []
})
export class WikipediaViewerComponent implements OnInit {
    public searchTerm: string;
    public searchResults = [];

    constructor(private wikipediaViewerService: WikipediaViewerService) {
    }

    ngOnInit() {
    }

    search() {
        this.wikipediaViewerService.searchWikipedia(this.searchTerm)
            .subscribe( response => {
                console.log('response:');
                console.log(response);
                this.searchResults = response;
            });
    }
}
