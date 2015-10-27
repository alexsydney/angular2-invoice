import {Component, View, CORE_DIRECTIVES, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {AddressRenderer} from './addressRenderer';
import {AddressInlineRenderer} from './addressInlineRenderer';
import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';
import {InvoiceService} from './invoiceService';
import {LogoRenderer} from './logoRenderer';
import {LogoModel} from './logoModel';

@Component({
    selector: 'app',
})
@View({
    directives: [
        CORE_DIRECTIVES, FORM_DIRECTIVES,
        AddressRenderer,
        AddressInlineRenderer,
        LogoRenderer
    ],
    template: `
        <div class="row">
            <div class="col-sm-6 col-sm-offset-6 text-right">
                <logo-renderer [model]="logo"></logo-renderer>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <address-inline-renderer [model]="senderInline"></address-inline-renderer>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <address-renderer [model]="recipient"></address-renderer>
            </div>
        </div>
    `
})
class App {
    recipient:AddressModel;
    sender:AddressModel;
    senderInline:AddressInlineModel;
    logo:LogoModel;

    constructor(public invoiceService:InvoiceService) {
        this.recipient = invoiceService.getRecipient();
        this.sender = invoiceService.getSender();
        this.senderInline = invoiceService.getSenderInline();
        this.logo = new LogoModel();
    }
}

bootstrap(App, [InvoiceService]);
