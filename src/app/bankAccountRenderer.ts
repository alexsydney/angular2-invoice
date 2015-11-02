import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {BankAccountModel} from "./bankAccountModel";

@Component({
    selector: 'bank-account-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <input type="text" class="form-control plain-input" [(ng-model)]="model.recipient">
        <input type="text" class="form-control plain-input" [(ng-model)]="model.institute">
        <input type="text" class="form-control plain-input" [(ng-model)]="model.bic">
        <input type="text" class="form-control plain-input" [(ng-model)]="model.iban">
    `
})
export class BankAccountRenderer {
    @Input() model : BankAccountModel;
}
