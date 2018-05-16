import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateAuthorId: any;
  updateAuthor: any;
  err: string;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
    ){    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.updateAuthorId = params['id']; 
    })
    this.showAuthor(this.updateAuthorId);
    this.updateAuthor = {name: ""};
}

  showAuthor(id){
    let observable = this._httpService.showOne(this.updateAuthorId);
    observable.subscribe(data => {
      console.log(data);
      this.updateAuthor =  data['author'];
      console.log("**********", this.updateAuthor);
    })
  }

  editOneAuthor(id){
    let observable = this._httpService.editAuthor(this.updateAuthor, this.updateAuthorId);
    observable.subscribe(data => {
      console.log(data);
      if(!data['err']){
        this._router.navigate(['/writers']);
      } else{
        console.log('YEAAAAAHH ERROR');
        this.err = data['err'].errors.name.message;
        this._router.navigate(['/writers/edit/' + this.updateAuthorId]);
      }
      
    })
  }
}
