import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {QuotesComponent} from './components/quotes/quotes.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
