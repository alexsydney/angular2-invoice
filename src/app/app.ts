import {Component, View, CORE_DIRECTIVES, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {AddressRenderer} from './addressRenderer';
import {AddressModel} from './addressModel';

@Component({
    selector: 'app',
})
@View({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, AddressRenderer],
    template: `
    <div class="row">
        <div class="col-sm-6">
            <address-renderer [data]="addressModel"></address-renderer>
        </div>
    </div>
    `
})
class App {
    addressModel : AddressModel = new AddressModel();
}

bootstrap(App, []);
