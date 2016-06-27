import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {BankAccountModel} from "./bankAccountModel";

@Component({
    selector: 'bank-account-renderer',
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="row">
            <div class="col-sm-12">
                <input type="text" class="form-control plain-input text-bold" [(ngModel)]="model.recipient">
                <div class="form-group row m-b-0">
                    <label for="institute" class="col-sm-2 form-control-label">Institute:</label>
                    <input type="text" id="institute" class="col-sm-10 form-control plain-input" [(ngModel)]="model.institute">
                </div>
                <div class="form-group row m-b-0">
                    <label for="bic" class="col-sm-2 form-control-label">BIC:</label>
                    <input type="text" id="bic" class="col-sm-10 form-control plain-input" [(ngModel)]="model.bic">
                </div>
                <div class="form-group row m-b-0">
                    <label for="iban" class="col-sm-2 form-control-label">IBAN:</label>
                    <input type="text" id="iban" class="col-sm-10 form-control plain-input" [(ngModel)]="model.iban">
                </div>
            </div>
        </div>
    `,
    inputs: ['model']
})
export class BankAccountRenderer {}
