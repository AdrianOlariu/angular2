/**
 * Created by Adrian on 3/15/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:String;

  constructor(private http:Http){
    console.log('Github Service Ready...');
    this.username = 'adrianolariu';
  }

  //getUser(){
  //  return this._http.get('http://api.github.com/users/' + this.username).map(res => res.json())
  //}
}
