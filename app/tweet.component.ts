import { Component, Input, Output, EventEmitter } from 'angular2/core';
import  {bootstrap} from 'angular2/platform/browser';
import {LikesComponent} from './like.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    styles:[`
        .glyph-pink { color:deeppink; }
        .glyph-grey { color:#ccc }
        .glyphicon-heart { cursor:pointer }
    `],
    directives:[LikesComponent],
    providers: [TweetService]
})
export class TweetComponent {
    tweet;
    constructor(tw:TweetService){
    this.tweet = tw.getTweets();
    }
    // @Input('UserName') userName = "Windward";
    // @Input('TweetHandle') tweetHandle = "@windward";
    // @Input('TweetBody') tweetBody = "Looking for a better company...";


}