import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {PaymentNoticeModel} from './paymentNoticeModel';

@Component({
    selector: 'payment-notice-renderer',
    directives: [FORM_DIRECTIVES],
    template: `
        <textarea rows="1" class="form-control plain-input" [(ngModel)]="notice.text"></textarea>
    `,
    inputs: ['notice']
})
export class PaymentNoticeRenderer {}
