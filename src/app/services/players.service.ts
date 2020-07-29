import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  getPlayers(teamId) {
    return this.httpClient.get(this.apiUrl + 'scores/json/Players/' + teamId, {headers: {
      'Ocp-Apim-Subscription-Key':environment.apiKey
    }}).toPromise();
  }
}
