import  {Injectable} from '@angular/core';
import  {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map';

var apiLink = 'http://localhost:8000/api/quotes/';

@Injectable()
export class PostService {


  constructor(private http: Http) {
  }

  getQuotes() {
    return this.http.get(apiLink)
      .map(res => res.json());
  }

  saveQuote(quote) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(apiLink, JSON.stringify(quote), {headers: headers})
      .map(res => res.json());
  }

  updateQuote(quote) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(apiLink + quote._id, JSON.stringify(quote), {headers: headers})
      .map(res => res.json());
  }

  deleteQuote(id) {
    return this.http.delete(apiLink + id)
      .map(res => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        } else {
          res.json();
        }
      });
  }

  singleQuote(id) {
    return this.http.get(apiLink + id)
      .map(res => res.json());
  }
}
