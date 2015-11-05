import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {AddressModel} from './addressModel';
import {SenderDetailsModel} from './senderDetailsModel';

@Component({
    selector: 'sender-details-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="sender-details">
            <input type="text" class="form-control plain-input text-bold" [(ng-model)]="addressModel.name">
            <input type="text" class="form-control plain-input" [(ng-model)]="addressModel.company">
            <input type="text" class="form-control plain-input" [(ng-model)]="addressModel.line1">
            <input type="text" class="form-control plain-input" [(ng-model)]="addressModel.line2">
            <input type="text" class="form-control plain-input m-b" [(ng-model)]="addressModel.zip">
            <div class="form-group row m-b-0">
                <label for="phone" class="col-sm-2 form-control-label">Phone:</label>
                <input type="text" id="phone" class="col-sm-10 form-control plain-input" [(ng-model)]="detailsModel.phone">
            </div>
            <div class="form-group row m-b-0">
                <label for="uri" class="col-sm-2 form-control-label">Web:</label>
                <input type="text" id="uri" class="col-sm-10 form-control plain-input" [(ng-model)]="detailsModel.uri">
            </div>
            <div class="form-group row m-b-0">
                <label for="email" class="col-sm-2 form-control-label">Email:</label>
                <input type="email" id="email" class="col-sm-10 form-control plain-input" [(ng-model)]="detailsModel.email">
            </div>
            <div class="form-group row m-b-0">
                <label for="vat" class="col-sm-2 form-control-label">VAT:</label>
                <input type="text" id="vat" class="col-sm-10 form-control plain-input" [(ng-model)]="detailsModel.vatid">
            </div>
        </div>
    `
})
export class SenderDetailsRenderer {
    @Input() addressModel : AddressModel;
    @Input() detailsModel : SenderDetailsModel;
}
