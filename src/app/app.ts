import {Component, View, CORE_DIRECTIVES, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {AddressRenderer} from './addressRenderer';
import {AddressModel} from './addressModel';

@Component({
    selector: 'app',
})
@View({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, AddressRenderer],
    template: `
        <address-renderer [data]="addressModel"></address-renderer>
        {{addressModel.name}}
    `
})
class App {
    addressModel : AddressModel = new AddressModel();
}

bootstrap(App, []);
