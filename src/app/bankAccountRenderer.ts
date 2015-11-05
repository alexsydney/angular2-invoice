import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {BankAccountModel} from "./bankAccountModel";

@Component({
    selector: 'bank-account-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="row">
            <div class="col-sm-12">
                <input type="text" class="form-control plain-input text-bold" [(ng-model)]="model.recipient">
                <div class="form-group row m-b-0">
                    <label for="institute" class="col-sm-2 form-control-label">Institute:</label>
                    <input type="text" id="institute" class="col-sm-10 form-control plain-input" [(ng-model)]="model.institute">
                </div>
                <div class="form-group row m-b-0">
                    <label for="bic" class="col-sm-2 form-control-label">BIC:</label>
                    <input type="text" id="bic" class="col-sm-10 form-control plain-input" [(ng-model)]="model.bic">
                </div>
                <div class="form-group row m-b-0">
                    <label for="iban" class="col-sm-2 form-control-label">IBAN:</label>
                    <input type="text" id="iban" class="col-sm-10 form-control plain-input" [(ng-model)]="model.iban">
                </div>
            </div>
        </div>
    `
})
export class BankAccountRenderer {
    @Input() model : BankAccountModel;
}
