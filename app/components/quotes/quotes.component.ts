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

  setEditState(quote, state) {
    if (state) {
      quote.isEditMode = state;
    } else {
      delete quote.isEditMode;
    }
  }

  updateStatus(quote) {
    var _quote = {
      _id: _quote._id,
      text: quote.text,
      author: 'ertas',
      tag: 'books'
    };
    this._postsService.updateQuote(_quote)
      .subscribe(data => {
        quote.isCompleted = !quote.isCompleted;
      })
  }

  updateQuoteText(event, quote) {
    if (event.which == 13) {
      quote.text = event.target.value;
      var _quote = {
        _id: quote._id,
        text: quote.text,
        author: 'ertas',
        tag: 'books'
      };
      this._postsService.updateQuote(_quote)
        .subscribe(data => {
          this.setEditState(quote, false);
        });
    }
  }

  deleteQuote(quote) {
    var quotes = this.quotes;
    this._postsService.deleteQuote(quote._id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < quotes.length; i++) {
            if (quotes[i]._id == quote._id) {
              quotes.splice(i, 1);
            }
          }
        }
      })
  }
}


