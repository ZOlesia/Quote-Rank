import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  authorId: string;
  selectedAuthor: any;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
    ){    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.authorId = params['id'];
    })
    this.showSelectedAuthor(this.authorId);
  }

  showSelectedAuthor(id){
    let observable = this._httpService.showOne(this.authorId);
    observable.subscribe( data => {
      console.log(data);
      this.selectedAuthor = data['author'];
      console.log('***** author is here', this.selectedAuthor);
    })
  }

  voteUp(id){
    let observable = this._httpService.voteQuote(this.authorId, {_id: id, voteVal: 1});
    observable.subscribe(data => {
      console.log(data);
      this.showSelectedAuthor(this.authorId);
    })
  }

  voteDown(id){
    let observable = this._httpService.voteQuote(this.authorId, {_id: id, voteVal: -1});
    observable.subscribe(data => {
      console.log(data);
      this.showSelectedAuthor(this.authorId);
    })
  }

  deleteThisQuote(id){
    let observable = this._httpService.removeQuote(id);
    observable.subscribe(data => {
      console.log(data);
      this.showSelectedAuthor(this.authorId);
    })
  }
}
