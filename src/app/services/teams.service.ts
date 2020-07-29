import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  //* properties
  private apiUrl = environment.apiUrl;


  //* constructor
  constructor(private httpClient : HttpClient) { }

  //* instance methods

  getAllTeams() {
    console.log(this.apiUrl + 'scores/json/Teams');
    return this.httpClient.get(this.apiUrl + 'scores/json/Teams', {headers: {
      'Ocp-Apim-Subscription-Key':environment.apiKey
    }}).toPromise();
  }
}
