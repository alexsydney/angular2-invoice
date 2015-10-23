import {Component, View, CORE_DIRECTIVES, bootstrap, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';

@Component({
    selector: 'app',
})
@View({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
        Hello World
    `
})
class App {

}

bootstrap(App, []);
