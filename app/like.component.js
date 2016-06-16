System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LikesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikesComponent = (function () {
                function LikesComponent() {
                    this.likes = 0;
                    this.isLiked = false;
                }
                LikesComponent.prototype.onClick = function () {
                    this.isLiked = !this.isLiked;
                    this.likes += this.isLiked ? 1 : -1;
                };
                __decorate([
                    core_1.Input("TotalLikes"), 
                    __metadata('design:type', Object)
                ], LikesComponent.prototype, "likes", void 0);
                __decorate([
                    core_1.Input("IsLike"), 
                    __metadata('design:type', Object)
                ], LikesComponent.prototype, "isLiked", void 0);
                LikesComponent = __decorate([
                    core_1.Component({
                        selector: "like",
                        template: "<i class=\"glyphicon glyphicon-heart\"\n    [class.grey]=\"!isLiked\"\n    [class.pink]=\"isLiked\"\n    (click)=onClick()>\n    </i> <span>{{ likes }}</span>",
                        styles: ["\n        .glyphicon-heart {\n            cursor: pointer;\n        }\n\n        .grey {\n            color: #ccc;\n        }\n\n        .pink {\n            color: deeppink;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikesComponent);
                return LikesComponent;
            }());
            exports_1("LikesComponent", LikesComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map