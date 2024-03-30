
import { Component, Input } from '@angular/core';
import { Post } from 'src/app/shared/interface/post.interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input() post!: Post;

  openPost(): void {
    window.open(this.post.url, '_blank');
  }
}

