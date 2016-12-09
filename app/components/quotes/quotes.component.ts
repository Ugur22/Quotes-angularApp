import {Component} from '@angular/core';
import {PostService} from '../../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'quotes',
  templateUrl: 'quotes.component.html',
  providers: [PostService]
})
export class QuotesComponent {

  name: string;
  email: string;
  address: address;
  posts: Post[];


  constructor(private postsService: PostService) {
    this.name = 'Ugur Ertas';
    this.email = 'ugur@gmail.com';
    this.address = {
      street: 'Zwartjanstraat 12',
      city: 'Rotterdam',
      state: 'ZH',
    }
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
}
interface address {
  street: string;
  city: string;
  state: string;
}
interface Post {
  id: number;
  title: string;
  body: string;
}



