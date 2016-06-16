import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [TweetComponent]
})
export class AppComponent {

}