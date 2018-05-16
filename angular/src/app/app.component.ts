import { Component, OnInit  } from '@angular/core'; //Anything  we want the component to do when it is initialized should go in the ngOnInit method.
import { HttpService } from './http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    // private _httpService: HttpService,
      //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){}
}
