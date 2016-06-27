import {Component, Input} from 'angular2/core';
import {LogoModel} from './logoModel';

@Component({
    selector: 'logo-renderer',
    template: `
        <img src="{{ model.src }}" width="350" alt="Logo">
    `,
    inputs: ['model']
})
export class LogoRenderer {}
