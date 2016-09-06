import { provideRouter, RouterConfig } from '@angular/router';
import { ProjectListComponent } from './project-list.component';
import { QuoteMachineComponent } from
    './intermediate-front-end/quote-machine/quote-machine.component';
import { LocalWeatherComponent } from
    './intermediate-front-end/local-weather/local-weather.component';
import { WikipediaViewerComponent } from
    './intermediate-front-end/wikipedia-viewer/wikipedia-viewer.component';
import { TwitchTvComponent } from 
    './intermediate-front-end/twitch-tv/twitch-tv.component';
import { BarChartComponent } from
    './d3-data-visualization/bar-chart/bar-chart.component';

// Route Configuration
export const routes: RouterConfig = [
    { path: '', component: ProjectListComponent },
    { path: 'quote-machine', component: QuoteMachineComponent },
    { path: 'local-weather', component: LocalWeatherComponent },
    { path: 'wikipedia-viewer', component: WikipediaViewerComponent },
    { path: 'twitch-tv', component: TwitchTvComponent },
    { path: 'bar-chart', component: BarChartComponent }
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

