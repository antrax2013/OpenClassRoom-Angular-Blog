import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  constructor() { }

  @Input()  title: string = 'titre';
  @Input() content: string = 'content';
  @Input() loveIts: number = 1;
  @Input() created_at: Date=new Date();

  ngOnInit() {
  }

  onLike(like) {
    if(like) this.loveIts++;
    else this.loveIts--;
  }

}
