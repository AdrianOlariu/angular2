/**
 * Created by Adrian on 3/15/2017.
 */
import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  {
  constructor(private _githubService: GithubService){

  }
}
