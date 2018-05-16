import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Dependency injection

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }  //Dependency injection

  showAuthors(){
    return this._http.get('/authors');
  }

  addAuthor(newAuthor){
    return this._http.post('/authors', newAuthor);
  }
  
  showOne(id){
    return this._http.get('/authors/' + id);
  }

  editAuthor(updateAuthor, id){
    return this._http.put('/authors/' + id, updateAuthor);
  }

  deleteOneAuthor(id){
    return this._http.delete('/authors/' + id);
  }

  addQuote(id, newQuote){
    return this._http.post('authors/' + id + '/quotes', newQuote);
  }

  voteQuote(id, vote){
    return this._http.put('/authors/quotes/' + id, vote);
  }

  removeQuote(id){
    return this._http.delete('/authors/quotes/' + id);
  }
}
