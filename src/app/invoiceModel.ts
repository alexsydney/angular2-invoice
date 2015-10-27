import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';

export class InvoiceModel {
    id : string;
    recipient : AddressModel;
    sender : AddressModel;
    senderInline : AddressInlineModel;
}
