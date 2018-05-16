import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  err: string;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
    this.newAuthor = {name: ""};
  }

  createAuthor(){

      let observable = this._httpService.addAuthor(this.newAuthor);
      observable.subscribe(data => {
        console.log(data);
        if(!data['err']){
          this.newAuthor = {name: ""};
          this._router.navigate(['/writers']);
        } else{
          this.err = data['err'].errors.name.message;
          this._router.navigate(['/writers/new']);
        }
      });
  }


}
