import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/posts.service';
import {Observable} from 'rxjs/Observable';
import {Quote} from '../../quote';

@Component({
  moduleId: module.id,
  selector: 'quotes-detail',
  templateUrl: 'quotesDetail.component.html',
  providers: [PostService]
})
export class QuotesDetailComponent implements OnInit {
  private sub: any;
  private quote: string[];

  constructor(private _postsService: PostService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      let id = params['id'];
      this._postsService.singleQuote(id).subscribe(quote => this.quote = quote);
    });
  }
}
