import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {AddressModel} from './addressModel';
import {SenderDetailsModel} from './senderDetailsModel';

@Component({
    selector: 'sender-details-renderer',
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="sender-details">
            <input type="text" class="form-control plain-input text-bold" [(ngModel)]="addressModel.name">
            <input type="text" class="form-control plain-input" [(ngModel)]="addressModel.company">
            <input type="text" class="form-control plain-input" [(ngModel)]="addressModel.line1">
            <input type="text" class="form-control plain-input" [(ngModel)]="addressModel.line2">
            <input type="text" class="form-control plain-input m-b" [(ngModel)]="addressModel.zip">
            <div class="form-group row m-b-0">
                <label for="phone" class="col-sm-2 form-control-label">Phone:</label>
                <input type="text" id="phone" class="col-sm-10 form-control plain-input" [(ngModel)]="detailsModel.phone">
            </div>
            <div class="form-group row m-b-0">
                <label for="uri" class="col-sm-2 form-control-label">Web:</label>
                <input type="text" id="uri" class="col-sm-10 form-control plain-input" [(ngModel)]="detailsModel.uri">
            </div>
            <div class="form-group row m-b-0">
                <label for="email" class="col-sm-2 form-control-label">Email:</label>
                <input type="email" id="email" class="col-sm-10 form-control plain-input" [(ngModel)]="detailsModel.email">
            </div>
            <div class="form-group row m-b-0">
                <label for="vat" class="col-sm-2 form-control-label">VAT:</label>
                <input type="text" id="vat" class="col-sm-10 form-control plain-input" [(ngModel)]="detailsModel.vatid">
            </div>
        </div>
    `,
    inputs: ['addressModel', 'detailsModel']
})
export class SenderDetailsRenderer {}
