import { Component } from '@angular/core';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private quotesService: QuotesService) {}

  onQuoteCreated(quote) {
    console.log('quote retrieved', quote);
      let addedQuote = this.quotesService.createQuote({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      text: quote.value.quote
    });

  console.log ('addedQuote', addedQuote);

  }

}
