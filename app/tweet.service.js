System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            "userName": 'Windward',
                            "tweetHandle": '@windwardstudios',
                            "tweetBody": "for kajka kjuuak loggala",
                            "pic": "1"
                        },
                        {
                            "userName": 'Michael',
                            "tweetHandle": '@michael',
                            "tweetBody": "for kajka kjuuak loggala",
                            "pic": "2"
                        },
                        {
                            "userName": 'Billy',
                            "tweetHandle": '@Boby',
                            "tweetBody": "for kajka kjuuak loggala",
                            "pic": "3"
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map