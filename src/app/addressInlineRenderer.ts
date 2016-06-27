import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {AddressInlineModel} from './addressInlineModel';

@Component({
    selector: 'address-inline-renderer',
    directives: [FORM_DIRECTIVES],
    template: `
        <input type="text" class="form-control form-control-sm plain-input text-muted" [(ngModel)]="model.content">
    `,
    inputs: ['model']
})
export class AddressInlineRenderer {}
