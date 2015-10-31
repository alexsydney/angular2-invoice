import {Component, View, Input, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {InvoiceItemModel} from './invoiceItemModel';

@Component({
    selector: 'invoice-data-renderer'
})
@View({
    directives: [FORM_DIRECTIVES, NgFor],
    template: `
        <div class="row">
            <div class="col-sm-6 text-bold">Description</div>
            <div class="col-sm-2 text-bold">Quantity</div>
            <div class="col-sm-2 text-bold">Cost</div>
            <div class="col-sm-2 text-bold">Total</div>
        </div>
        <hr>
        <div class="invoice-items">
            <div class="row" *ng-for="#item of items">
                <div class="col-sm-6 p-l-0">
                    <input type="text" class="form-control plain-input" [(ng-model)]="item.description">
                </div>
                <div class="col-sm-2 p-l-0">
                    <input type="text" class="form-control plain-input" [(ng-model)]="item.quantity">
                </div>
                <div class="col-sm-2 p-l-0">
                    <input type="text" class="form-control plain-input" [(ng-model)]="item.cost">
                </div>
                <div class="col-sm-2 column-total">
                    {{item.quantity * item.cost}}
                </div>
            </div>
        </div>
        <hr>
        <div class="invoice-details">
            <div class="row">
                <div class="col-sm-2 col-sm-offset-8 text-italic">Subtotal</div>
                <div class="col-sm-2 text-italic">{{getSubTotal()}}</div>
            </div>
            <div class="row">
                <div class="col-sm-2 col-sm-offset-6 text-right text-italic">Tax %</div>
                <div class="col-sm-2 p-l-0 text-italic">
                    <input type="number" class="form-control plain-input" [(ng-model)]="tax">
                </div>
                <div class="col-sm-2 text-italic">{{getTax()}}</div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-2 col-sm-offset-8 text-bold">Grand-Total</div>
                <div class="col-sm-2 text-bold">{{getGrandTotal()}}</div>
            </div>
        </div>
    `
})
export class InvoiceDataRenderer {
    // todo belongs to the invoice model
    tax : number = 19;

    @Input() items : InvoiceItemModel[];

    // todo all methods belong to the invoice service
    getSubTotal() : number {
        let subTotal : number = 0;

        this.items.forEach(function (item : InvoiceItemModel) {
            subTotal += item.quantity * item.cost;
        });

        return subTotal;
    }

    getTax() : number {
        return this.getSubTotal() * (this.tax / 100);
    }

    getGrandTotal() : number {
        return this.getSubTotal() + this.getTax();
    }
}
