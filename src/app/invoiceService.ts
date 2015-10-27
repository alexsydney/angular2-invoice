import {InvoiceModel} from './invoiceModel';
import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';
import {SenderDetailsModel} from './senderDetailsModel';

export class InvoiceService {
    data : InvoiceModel = <InvoiceModel> {
        id: 't3478',
        recipient: <AddressModel> {
            name: 'John Doe',
            company: 'J.D. Inc.',
            line1: '1 Infinite Loop',
            line2: 'Cupertino, California, US',
            zip: '90210'
        },
        sender: <AddressModel> {
            name: 'Jane Doe',
            company: 'J.D. Inc.',
            line1: '1 Infinite Loop',
            line2: 'Cupertino, California, US',
            zip: '90210'
        },
        senderInline: <AddressInlineModel> {
            content: 'Jane Doe, 1 Infinite Loop, Cupertino'
        },
        senderDetails: <SenderDetailsModel> {
            phone: '7834 53 75 25 780',
            uri: 'http://github.com/hendrikmaus',
            email: 'aidentailor@gmail.com'
        }
    };

    getRecipient() : AddressModel {
        return this.data.recipient;
    }

    getSender() : AddressModel {
        return this.data.sender;
    }

    getSenderInline() : AddressInlineModel {
        return this.data.senderInline;
    }

    getSenderDetails() : SenderDetailsModel {
        return this.data.senderDetails;
    }
}
