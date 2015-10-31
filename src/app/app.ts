import {Component, View, CORE_DIRECTIVES, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {AddressRenderer} from './addressRenderer';
import {AddressInlineRenderer} from './addressInlineRenderer';
import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';
import {InvoiceService} from './invoiceService';
import {LogoService} from './logoService';
import {LogoRenderer} from './logoRenderer';
import {LogoModel} from './logoModel';
import {SenderDetailsRenderer} from './senderDetailsRenderer';
import {SenderDetailsModel} from './senderDetailsModel';
import {InvoiceIdRenderer} from './invoiceIdRenderer';
import {InvoiceIdModel} from './invoiceIdModel';
import {InvoiceItemModel} from './invoiceItemModel';
import {InvoiceDataRenderer} from './invoiceDataRenderer';
import {PaymentNoticeRenderer} from './paymentNoticeRenderer';
import {PaymentNoticeModel} from './paymentNoticeModel';

@Component({
    selector: 'app',
})
@View({
    directives: [
        CORE_DIRECTIVES, FORM_DIRECTIVES,
        AddressRenderer,
        AddressInlineRenderer,
        LogoRenderer,
        SenderDetailsRenderer,
        InvoiceIdRenderer,
        InvoiceDataRenderer,
        PaymentNoticeRenderer
    ],
    template: `
        <div class="row m-b-lg">
            <div class="col-sm-6 col-sm-offset-6">
                <logo-renderer [model]="logo"></logo-renderer>
            </div>
        </div>
        <div class="row m-b">
            <div class="col-sm-6 p-l-0">
                <address-inline-renderer [model]="senderInline"></address-inline-renderer>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 p-l-0">
                <address-renderer [model]="recipient"></address-renderer>
            </div>
            <div class="col-sm-6 p-l-0">
                <sender-details-renderer [address-model]="sender" [details-model]="senderDetails"></sender-details-renderer>
            </div>
        </div>
        <div class="row">
            <invoice-id-renderer class="m-t-lg" [invoice-id]="invoiceId"></invoice-id-renderer>
        </div>
        <hr>
        <div class="row">
            <invoice-data-renderer class="col-sm-12" [items]="items"></invoice-data-renderer>
        </div>
        <div class="row m-t-lg">
            <payment-notice-renderer class="col-sm-12 p-l-0" [(notice)]="invoiceService.data.paymentNotice"></payment-notice-renderer>
        </div>
        <div class="row m-t-md">
            <div class="col-sm-12"><p class="text-muted">[Bank Account]</p></div>
        </div>
        <footer class="row">
            <div class="col-sm-12"><p class="text-muted">[Footer]</p></div>
        </footer>
    `
})
class App {
    recipient : AddressModel;
    sender : AddressModel;
    senderInline : AddressInlineModel;
    senderDetails : SenderDetailsModel;
    logo : LogoModel;
    invoiceId : InvoiceIdModel;
    items : InvoiceItemModel[];

    constructor(
        public invoiceService : InvoiceService,
        public logoService : LogoService
    ) {
        this.logo = logoService.getLogo();

        this.recipient = invoiceService.getRecipient();
        this.sender = invoiceService.getSender();
        this.senderInline = invoiceService.getSenderInline();
        this.senderDetails = invoiceService.getSenderDetails();
        this.invoiceId = invoiceService.getId();
        this.items = invoiceService.getItems();
    }
}

bootstrap(App, [InvoiceService, LogoService]);
