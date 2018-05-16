import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes



@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  authorId: string;
  newQuote: any;
  author: any;
  err: string;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
    ){    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.authorId = params['id'];
    })
    this.showAuthor(this.authorId);
    this.newQuote = {content: ""}
  }
  
  showAuthor(id){
    let observable = this._httpService.showOne(this.authorId);
    observable.subscribe(data => {
      console.log(data);
      this.author =  data['author'];
      console.log("**********", this.author);
    })
  }

  addNewQuote(id){
    let observable = this._httpService.addQuote(this.authorId, this.newQuote);
    observable.subscribe(data => {
      if(data['err']){
        console.log(data['err'].errors.content.message);
        this.err = data['err'].errors.content.message;
        this._router.navigate(['/writers/quotes/new/' + this.authorId]);
      } else{
          console.log('AUTHORS ID IS HERE ', this.authorId);
          console.log('NEW QUOTE IS HERE', data);
          this.newQuote = {content: ""};
          this._router.navigate(['/writers/quotes/' + this.authorId]);
      }
    })
  }
}
