import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {AddressModel} from './addressModel';

@Component({
    selector: 'address-renderer',
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="invoice-address">
            <input type="text" class="form-control plain-input text-bold" [(ngModel)]="model.name">
            <input type="text" class="form-control plain-input" [(ngModel)]="model.company">
            <input type="text" class="form-control plain-input" [(ngModel)]="model.line1">
            <input type="text" class="form-control plain-input" [(ngModel)]="model.line2">
            <input type="text" class="form-control plain-input" [(ngModel)]="model.zip">
        </div>
    `,
    inputs: ['model']
})
export class AddressRenderer {}
