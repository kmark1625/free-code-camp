import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// bootstrap(FreeCodeCampAppComponent, [APP_ROUTER_PROVIDERS]);
platformBrowserDynamic().bootstrapModule(AppModule);
