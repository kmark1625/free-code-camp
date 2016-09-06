import { Component, OnInit } from '@angular/core';
import {TwitchTvService } from './twitch-tv.service';

@Component({
    moduleId: module.id,
    templateUrl: './twitch-tv.component.html',
    providers: [TwitchTvService],
    directives: []
})
export class TwitchTvComponent implements OnInit {
    public streamers: any;

    constructor(private twitchTvService: TwitchTvService) {
    }

    ngOnInit() {
        this.twitchTvService.getStreamerInfo()
            .subscribe(response => {
                console.log(response);
                this.streamers = response;
                console.log('streamers:');
                console.log(this.streamers);
            });
    }
}
