import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service'; //register service
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './all/all.component';
import { UpdateComponent } from './update/update.component';
import { NewComponent } from './new/new.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    UpdateComponent,
    NewComponent,
    QuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //to fetch the data???
    FormsModule, AppRoutingModule // <-- register FormsModule with our app.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
