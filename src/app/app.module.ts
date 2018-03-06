import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


// FIREBASE
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// SERVICES
import { QuotesService } from './services/quotes.service';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';



const CONFIG: FirebaseAppConfig = {
  apiKey: 'AIzaSyBsPPjBmyWppMD3pFb4UnA2Q79hpQCDjCE',
  authDomain: 'ngmemento-ced71.firebaseapp.com',
  databaseURL: 'https://ngmemento-ced71.firebaseio.com',
  projectId: 'ngmemento-ced71',
  storageBucket: 'ngmemento-ced71.appspot.com',
  messagingSenderId: '1097263689455'
};

const ROUTES: Routes = [
  { path : '', pathMatch: 'full', component: QuotesComponent },
  { path: 'quote/:id', component: QuoteDetailsComponent },
  { path: 'admin', component: BackendHomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    QuoteDetailsComponent,
    BackendHomeComponent,
    BackendQuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
