import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {

  constructor (private quotesService: QuotesService) {}

  onQuoteCreated(quote) {
    console.log('quote retrieved', quote);
      const addedQuote = this.quotesService.createQuote({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      text: quote.value.quote
    });

  console.log ('addedQuote', addedQuote);

  }
  ngOnInit() {
  }
}
