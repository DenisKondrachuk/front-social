import { Component } from '@angular/core';
import '../../public/css/style.css';
import './app.component.css';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HeaderLogin} from "./header-login/header-login"
import {SignpageComponent} from "./signpage-component/signpage-component";
import {ResetpwComponent} from "./resetpw-component/resetpw-component";
import {CarouselComponent} from "./carousel-component/carousel-component";
import {archiveItemsBoxComponent} from "./archive-items-box-component/archive-items-box-component";
import {archiveItemsSingleCardComponent} from "./archive-items-box-component/archive-items-single-card-component/archive-items-single-card-component";


@Component({
  selector: 'my-app',
  template:require('./app.component.html'),
  directives:[ROUTER_DIRECTIVES, HeaderLogin, SignpageComponent, ResetpwComponent,CarouselComponent,
              archiveItemsBoxComponent, archiveItemsSingleCardComponent]
})
export class AppComponent {

}

