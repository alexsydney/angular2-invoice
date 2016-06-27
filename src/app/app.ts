import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgFor} from 'angular2/common';

import {InvoiceService} from './invoiceService';
import {LogoService} from './logoService';

import {LogoModel} from './logoModel';
import {InvoiceModel} from "./invoiceModel";

import {AddressRenderer} from './addressRenderer';
import {AddressInlineRenderer} from './addressInlineRenderer';
import {LogoRenderer} from './logoRenderer';
import {SenderDetailsRenderer} from './senderDetailsRenderer';
import {InvoiceIdRenderer} from './invoiceIdRenderer';
import {InvoiceDataRenderer} from './invoiceDataRenderer';
import {PaymentNoticeRenderer} from './paymentNoticeRenderer';
import {BankAccountRenderer} from "./bankAccountRenderer";

@Component({
    selector: 'app',
    directives: [
        CORE_DIRECTIVES,
        FORM_DIRECTIVES,
        AddressRenderer,
        AddressInlineRenderer,
        LogoRenderer,
        SenderDetailsRenderer,
        InvoiceIdRenderer,
        InvoiceDataRenderer,
        PaymentNoticeRenderer,
        BankAccountRenderer
    ],
    template: `
        <!-- Company Logo -->
        <div class="row m-b-lg">
            <div class="col-sm-6 col-sm-offset-6">
                <logo-renderer [model]="logo"></logo-renderer>
            </div>
        </div>

        <!-- Inline Sender Line for Address Display-->
        <section class="row m-b">
            <div class="col-sm-6 p-l-0">
                <address-inline-renderer [model]="invoice.senderInline"></address-inline-renderer>
            </div>
        </section>

        <!-- Recipient for Address Display -->
        <section class="row">
            <div class="col-sm-6 p-l-0">
                <address-renderer [model]="invoice.recipient"></address-renderer>
            </div>
            <div class="col-sm-6 p-l-0">
                <sender-details-renderer [address-model]="invoice.sender" [details-model]="invoice.senderDetails"></sender-details-renderer>
            </div>
        </section>

        <!-- Invoice ID & Date-->
        <section class="row m-t-lg">
            <invoice-id-renderer class="col-sm-6 p-l-0" [invoice-id]="invoice.id"></invoice-id-renderer>

            <!-- todo (datepicker) Always display today's date for now; also format is bound to the client system -->
            <p class="col-sm-6">{{ invoice.date.toDateString() }}</p>
        </section>
        <hr>

        <!-- Invoice Data, i.e. Items in it-->
        <section class="row">
            <invoice-data-renderer class="col-sm-12" [items]="invoice.items"></invoice-data-renderer>
        </section>

        <!-- Payment Notice -->
        <section class="row m-t-lg">
            <payment-notice-renderer class="col-sm-12 p-l-0" [notice]="invoice.paymentNotice"></payment-notice-renderer>
        </section>

        <!-- Bank Account Display -->
        <section class="row m-t-md">
            <bank-account-renderer class="col-sm-6 p-l-0" [model]="invoice.bankAccount"></bank-account-renderer>
        </section>
    `
})
class App {
    invoice : InvoiceModel;
    logo : LogoModel;

    constructor(
        public invoiceService : InvoiceService,
        public logoService : LogoService
    ) {
        this.logo = logoService.logo;
        this.invoice = invoiceService.data;
    }
}

bootstrap(App, <any>[InvoiceService, LogoService]);
