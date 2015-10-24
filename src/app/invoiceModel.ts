import {AddressModel} from './addressModel';

export class InvoiceModel {
    id:string;
    recipient:AddressModel;
    sender:AddressModel;
    senderInline:AddressModel;
}
