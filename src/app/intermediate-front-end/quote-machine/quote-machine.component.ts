import { Component, OnInit } from '@angular/core';
import { QuoteMachineService } from './quote-machine.service';

@Component({
    moduleId: module.id,
    templateUrl: './quote-machine.component.html',
    providers: [QuoteMachineService]
})
export class QuoteMachineComponent implements OnInit {
    quote: string;

    constructor(private quoteMachineService: QuoteMachineService) {
    }

    ngOnInit() {
        this.getQuote();
    }

    getQuote() {
        this.quoteMachineService.getQuote()
            .subscribe(quote => this.quote = quote);
    }

    tweetQuote() {
        window.open('https://twitter.com/intent/tweet?text=' + this.quote);
    }
}
