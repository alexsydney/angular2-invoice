import {InvoiceModel} from './invoiceModel';
import {AddressModel} from './addressModel';
import {AddressInlineModel} from './addressInlineModel';
import {SenderDetailsModel} from './senderDetailsModel';
import {InvoiceIdModel} from './invoiceIdModel';
import {InvoiceItemModel} from './invoiceItemModel';
import {PaymentNoticeModel} from './paymentNoticeModel';
import {BankAccountModel} from "./bankAccountModel";

export class InvoiceService {
    data : InvoiceModel = <InvoiceModel> {
        id: <InvoiceIdModel> {
            id: 't3478'
        },
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
        },
        items: <InvoiceItemModel[]> [
            <InvoiceItemModel> {
                description: 'Project setup',
                quantity: 1,
                cost: 300.99
            },
            <InvoiceItemModel> {
                description: 'Development',
                quantity: 13.5,
                cost: 44.50
            }
        ],
        paymentNotice: <PaymentNoticeModel> {
            text: "The grand total is to be paid onto the below mentioned bank account until the 1st of Jan 2016."
        },
        bankAccount: <BankAccountModel> {
            recipient: "Hendrik Maus",
            institute : "Bank of Awesome",
            bic : "BUFTOBJKB",
            iban : "DE532975238507"
        }
    };
}
