/**
 * Created by Mike on 20.08.16.
 */
import {Component} from "@angular/core";
import {CarouselComponent} from "../carousel-component/carousel-component";
import {archiveItemsBoxComponent} from "../archive-items-box-component/archive-items-box-component";

@Component({
    selector:'index-component',
    template:require('./index-component.html'),
    directives: [CarouselComponent, archiveItemsBoxComponent]
})

export class IndexComponent {

}
