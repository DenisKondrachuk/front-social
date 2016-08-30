/**
 * Author: Vitalii Ryzhenko | 28.08.2016
 * Status: This component use to hold and realize functionality of personal page of card
 * Map:
 * leftSingleCardDescComponent - use to hold and transport to "single card"  info about item and time
 * leftSingleCardStatsComponent - use to realize and to show statictic data about "single card"
 * leftSingleCardFedbackComponent - use to realize and to show for outher user's a feedback about this item
 * rightSingleCardCurrentComponent - use to show current situation about item (money, quatity and many more..)
 * rightSingleCardSellerComponent - use to show seller info and stats
 * rightSingleCardStatsComponent - stats about 
 */
import {Component} from "@angular/core";
import {leftSingleCardDescComponent} from "./left-single-card-descr-component/left-single-card-descr-component";
import {leftSingleCardStatsComponent} from "./left-single-card-stats-component/left-single-card-stats-component";
import {leftSingleCardFedbackComponent} from "./left-single-card-fedback-component/left-single-card-fedback-component";
import {rightSingleCardCurrentComponent} from "./right-single-card-current-component/right-single-card-current-component";
import {rightSingleCardSellerComponent} from "./right-single-card-seller-component/right-single-card-seller-component";
import {rightSingleCardStatsComponent} from "./right-single-card-stats-component/right-single-card-stats-component";

@Component({
  selector:'archive-items-single-card-component',
  template:require('./archive-items-single-card-component.html'),
  styleUrls:['./archive-items-single-card-component.css'],
  directives: [leftSingleCardDescComponent, leftSingleCardStatsComponent, leftSingleCardFedbackComponent,
               rightSingleCardCurrentComponent, rightSingleCardSellerComponent, rightSingleCardStatsComponent]

})

export class archiveItemsSingleCardComponent {

}
