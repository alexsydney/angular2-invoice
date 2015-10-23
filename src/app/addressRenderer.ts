import {Component, View, Input} from 'angular2/angular2';
import {AddressModel} from './addressModel';

@Component({
    selector: 'address-renderer'
})
@View({
    template: `
        <address>{{data.name}}</address>
    `
})
export class AddressRenderer {
    @Input() data : AddressModel;
}
