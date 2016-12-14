import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/posts.service';

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
    this.getQuote();
  }

  setEditState(quote, state) {
    if (state) {
      quote.isEditMode = state;
    } else {
      delete quote.isEditMode;
    }
  }

  getQuote() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this._postsService.singleQuote(id).subscribe(quote => this.quote = quote);
    });
  }


  updateQuoteText(event, quoteText, quoteAuthor, quoteTag, quote) {
    var _quote = {
      _id: quote._id,
      text: quoteText.value,
      author: quoteAuthor.value,
      tag: quoteTag.value
    };
    this._postsService.updateQuote(_quote)
      .subscribe(data => {
        this.setEditState(quote, false);
        this.getQuote();
      });
    console.log("update quote");
  }

}
