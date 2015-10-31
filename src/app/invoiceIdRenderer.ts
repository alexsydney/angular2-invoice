import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {InvoiceIdModel} from './invoiceIdModel';

@Component({
    selector: 'invoice-id-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="form-group row m-b-0">
            <label for="invoice-id" class="col-sm-4 form-control-label text-bold">Invoice #</label>
            <input type="text" id="invoice-id" class="col-sm-8 form-control plain-input text-bold" [(ng-model)]="invoiceId.id">
        </div>
    `
})
export class InvoiceIdRenderer {
    @Input() invoiceId : InvoiceIdModel;
}
