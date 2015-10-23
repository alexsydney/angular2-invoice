import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {AddressModel} from './addressModel';

@Component({
    selector: 'address-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <input type="text" class="form-control plain-input" [(ng-model)]="data.name">
        <input type="text" class="form-control plain-input" [(ng-model)]="data.company">
        <input type="text" class="form-control plain-input" [(ng-model)]="data.line1">
        <input type="text" class="form-control plain-input" [(ng-model)]="data.line2">
        <input type="text" class="form-control plain-input" [(ng-model)]="data.zip">
    `
})
export class AddressRenderer {
    @Input() data : AddressModel;
}
