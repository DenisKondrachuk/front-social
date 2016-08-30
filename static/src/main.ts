import { bootstrap } from '@angular/platform-browser-dynamic';
import {enableProdMode, PLATFORM_DIRECTIVES, provide} from '@angular/core';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.router';
import {ROUTER_DIRECTIVES} from "@angular/router";
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [APP_ROUTER_PROVIDERS,
  provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})]);
