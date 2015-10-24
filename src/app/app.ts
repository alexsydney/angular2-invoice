import {Component, View, CORE_DIRECTIVES, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {AddressRenderer} from './addressRenderer';
import {AddressInlineRenderer} from './addressInlineRenderer';
import {AddressModel} from './addressModel';
import {InvoiceService} from './invoiceService';

@Component({
    selector: 'app',
})
@View({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, AddressRenderer, AddressInlineRenderer],
    template: `
        <div class="row">
            <div class="col-sm-12">
                <address-inline-renderer [data]="senderInline"></address-inline-renderer>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <address-renderer [data]="recipient"></address-renderer>
            </div>
        </div>
    `
})
class App {
    recipient:AddressModel;
    sender:AddressModel;
    senderInline:AddressModel;

    constructor(public invoiceService:InvoiceService) {
        this.recipient = invoiceService.getRecipient();
        this.sender = invoiceService.getSender();
        this.senderInline = invoiceService.getSenderInline();
    }
}

bootstrap(App, [InvoiceService]);
