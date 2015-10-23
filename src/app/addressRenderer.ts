import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {AddressModel} from './addressModel';

@Component({
    selector: 'address-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <input type="text" [(ng-model)]="data.name">
    `
})
export class AddressRenderer {
    @Input() data : AddressModel;
}
