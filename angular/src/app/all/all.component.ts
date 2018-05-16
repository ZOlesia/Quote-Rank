import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  allAuthors: any;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    ){}
  ngOnInit() {
    this.showAll();
  }

  showAll(){
    let observable = this._httpService.showAuthors();
    observable.subscribe(data => {
      console.log(data);
      this.allAuthors = data['authors'];
    }) 
  }

  deleteAuthor(id: string){
    let observable = this._httpService.deleteOneAuthor(id);
    observable.subscribe(data => {
      console.log(data);
      this.showAll();
    })
  }

}
