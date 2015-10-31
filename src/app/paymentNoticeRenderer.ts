import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {PaymentNoticeModel} from './paymentNoticeModel';

@Component({
    selector: 'payment-notice-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <textarea rows="1" class="form-control plain-input" [(ng-model)]="notice.text"></textarea>
    `
})
export class PaymentNoticeRenderer {
    @Input() notice : PaymentNoticeModel;
}
