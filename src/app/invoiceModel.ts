import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';
import {SenderDetailsModel} from './senderDetailsModel';
import {InvoiceIdModel} from './invoiceIdModel';
import {InvoiceItemModel} from './invoiceItemModel';
import {PaymentNoticeModel} from './paymentNoticeModel';
import {BankAccountModel} from './bankAccountModel';

export class InvoiceModel {
    id : InvoiceIdModel;
    date : Date;
    recipient : AddressModel;
    sender : AddressModel;
    senderInline : AddressInlineModel;
    senderDetails : SenderDetailsModel;
    items : InvoiceItemModel[];
    paymentNotice : PaymentNoticeModel;
    bankAccount : BankAccountModel;
}
