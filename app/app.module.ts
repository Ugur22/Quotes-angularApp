import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {QuotesComponent} from './components/quotes/quotes.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {routing} from './app.routing';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, QuotesComponent, AboutComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
