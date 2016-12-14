import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/posts.service';
import {Quote} from '../../quote';

@Component({
  moduleId: module.id,
  selector: 'quotes',
  templateUrl: 'quotes.component.html',
  styleUrls: ['quotes.component.css'],
  providers: [PostService]
})
export class QuotesComponent implements OnInit {

  quotes: any[] = [];


  constructor(private _postsService: PostService) {

  }

  ngOnInit() {
    this.quotes = [];
    this.getResults();

  }

  clearResults() {
    this.quotes = [];
  }

  getResults() {
    this._postsService.getQuotes().subscribe(quotes => {
      this.quotes = quotes.items;
    })
  }

  addQuote(event, quoteText, quoteAuthor, quoteTag) {
    var result;
    var newQuote = {
      text: quoteText.value,
      author: quoteAuthor.value,
      tag: quoteTag.value
    };

    result = this._postsService.saveQuote(newQuote);
    result.subscribe(x => {
      this.quotes.push(newQuote);
      quoteText.value = '';
      quoteAuthor.value = '';
      quoteTag.value = '';
    })
  };


  deleteQuote(quote) {
    var quotes = this.quotes;
    this._postsService.deleteQuote(quote._id)
      .subscribe(data => {
        for (var i = 0; i < quotes.length; i++) {
          if (quotes[i]._id == quote._id) {
            quotes.splice(i, 1);
          }
        }
      })
  }
}


