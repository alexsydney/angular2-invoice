import {LogoModel} from './logoModel';

export class LogoService {
    logo : LogoModel = <LogoModel> {
        src: 'http://placehold.it/350x80'
    };

    getLogo() : LogoModel {
        return this.logo;
    }
}
