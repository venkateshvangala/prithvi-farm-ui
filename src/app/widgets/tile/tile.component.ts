import { CartService } from './../../services/cart.service';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'pruthvi-firm-tile',
    templateUrl: 'tile.component.html',
    styleUrls: ['tile.component.scss']
})
export class TileComponent{

    constructor(private cartService: CartService){

    }

    @Input() item: any;

    addItemToCart(item){
        this.cartService.addItemToCart(item);
    }
    
}