/**
 * Author: Vitalii Ryzhenko | 28.08.2016
 * Status: This component use to hold and realize all items cards and it will be repeated for other pages
 * Map:
 * itemTitle - *ngFor to repeat array
 * itemList - *ngFor to repeat the quatity of card per page
 * paginationList - *ngFor to repeat the number of page
 */
import {Component} from "@angular/core";
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  selector:'archive-items-item-component',
  template:require('./archive-items-item-component.html'),
  styleUrls:['./archive-items-item-component.css'],
  directives: [CORE_DIRECTIVES]

})

export class archiveItemsItemComponent {
  /* item title list */
  itemTitle = [
    'Income of Social',
    'Popularity of social',
    'Rate of social',
    'Time to end',
    'Best of rate'
  ];
  /* item card list */
  itemList = new Array(10);
  /* pagination numbers */
  paginationList = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
}
