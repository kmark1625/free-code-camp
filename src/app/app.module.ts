import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule, JSONP_PROVIDERS } from '@angular/http';
import { FreeCodeCampAppComponent } from './free-code-camp.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [FreeCodeCampAppComponent ],
    bootstrap: [FreeCodeCampAppComponent ],
    providers: [APP_ROUTER_PROVIDERS, JSONP_PROVIDERS]
})
export class AppModule { }
