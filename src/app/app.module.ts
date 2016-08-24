import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { FreeCodeCampAppComponent } from './free-code-camp.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [FreeCodeCampAppComponent ],
    bootstrap: [FreeCodeCampAppComponent ],
    providers: [APP_ROUTER_PROVIDERS]
})
export class AppModule { }
