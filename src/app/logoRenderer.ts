import {Component, View, Input} from 'angular2/angular2';
import {LogoModel} from './logoModel';

@Component({
    selector: 'logo-renderer'
})
@View({
    template: `
        <img src="{{ model.src }}" width="350" alt="Logo">
    `
})
export class LogoRenderer {
    @Input() model : LogoModel;
}
