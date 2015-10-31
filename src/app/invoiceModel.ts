import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';
import {SenderDetailsModel} from './senderDetailsModel';
import {InvoiceIdModel} from './invoiceIdModel';
import {InvoiceItemModel} from './invoiceItemModel';
import {PaymentNoticeModel} from './paymentNoticeModel';

export class InvoiceModel {
    id : InvoiceIdModel;
    recipient : AddressModel;
    sender : AddressModel;
    senderInline : AddressInlineModel;
    senderDetails : SenderDetailsModel;
    items : InvoiceItemModel[];
    paymentNotice : PaymentNoticeModel;
}
