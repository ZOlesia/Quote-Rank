import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { AllComponent } from './all/all.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';


const routes: Routes = [
  {path: 'writers/new', component: NewComponent},
  {path: 'writers/edit/:id', component: UpdateComponent},
  {path: 'writers', component: AllComponent},
  {path: '', pathMatch: 'full', redirectTo: '/writers'},
  {path: 'writers/quotes/:id', component: QuotesComponent},
  {path: 'writers/quotes/new/:id', component: NewQuoteComponent}
  // {path: '**', component: AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
