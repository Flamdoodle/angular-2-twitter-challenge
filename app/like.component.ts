import { Component, Input } from "angular2/core";

@Component ({
    selector: "like",
    template: `<i class="glyphicon glyphicon-heart"
    [class.grey]="!isLiked"
    [class.pink]="isLiked"
    (click)=onClick()>
    </i> <span>{{ likes }}</span>`,
    styles: [`
        .glyphicon-heart {
            cursor: pointer;
        }

        .grey {
            color: #ccc;
        }

        .pink {
            color: deeppink;
        }
    `]
})

export class LikesComponent {
    @Input("TotalLikes") likes = 0;
    @Input("IsLike") isLiked = false;

    onClick() {
        this.isLiked = !this.isLiked;
        this.likes += this.isLiked ? 1 : -1;
    }
}