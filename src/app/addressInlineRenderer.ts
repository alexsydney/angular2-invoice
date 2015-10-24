import {Component, View, Input} from 'angular2/angular2';
import {AddressModel} from './addressModel';

@Component({
    selector: 'address-inline-renderer'
})
@View({
    template: `
        <address>
            <small>
                <span [hidden]="data.name.length === 0">{{data.name}},</span>
                <span [hidden]="data.company.length === 0">{{data.company}},</span>
                <span [hidden]="data.line1.length === 0">{{data.line1}},</span>
                <span [hidden]="data.line2.length === 0">{{data.line2}},</span>
                <span [hidden]="data.zip.length === 0">{{data.zip}}</span>
            </small>
        </address>
    `
})
export class AddressInlineRenderer {
    @Input() data : AddressModel;
}
