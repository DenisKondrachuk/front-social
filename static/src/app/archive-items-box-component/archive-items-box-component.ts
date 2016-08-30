/**
 * Author: Vitalii Ryzhenko | 28.08.2016
 * Status: This component use to hold and realize functionality and to combine filter items
 * Map:
 * archiveItemsFilterComponent - use to realize the filters on the main page
 * archiveItemsItemComponent - use to create a card item
 * archiveItemsSingleCardComponent - use to create a single page of item
 */

import {Component} from "@angular/core";
import {archiveItemsFilterComponent} from "./archive-items-filter-component/archive-items-filter-component";
import {archiveItemsItemComponent} from "./archive-items-item-component/archive-items-item-component";
import {archiveItemsSingleCardComponent} from "./archive-items-single-card-component/archive-items-single-card-component";

@Component({
  selector:'archive-items-box-component',
  template:require('./archive-items-box-component.html'),
  styleUrls:['./archive-items-box-component.css'],
  directives: [archiveItemsFilterComponent, archiveItemsItemComponent, archiveItemsSingleCardComponent]

})

export class archiveItemsBoxComponent {

}
