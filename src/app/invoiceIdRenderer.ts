import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {InvoiceIdModel} from './invoiceIdModel';

@Component({
    selector: 'invoice-id-renderer',
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="form-group row m-b-0">
            <label for="invoice-id" class="col-sm-4 form-control-label text-bold">Invoice #</label>
            <input type="text" id="invoice-id" class="col-sm-8 form-control plain-input text-bold" [(ngModel)]="invoiceId.id">
        </div>
    `,
    inputs: ['invoiceId']
})
export class InvoiceIdRenderer {}
