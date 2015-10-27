import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';
import {SenderDetailsModel} from './senderDetailsModel';

export class InvoiceModel {
    id : string;
    recipient : AddressModel;
    sender : AddressModel;
    senderInline : AddressInlineModel;
    senderDetails : SenderDetailsModel;
}
