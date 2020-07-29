import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public teamId;
  public team;
  public players;

  constructor(
    private playersService : PlayersService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { this.teamId = params.id })
    this.getPlayers();
  }

  getPlayers() {
    console.log('getting all the players');
    this.playersService.getPlayers(this.teamId)
    .then(response => {
      console.log(response); this.players = response})
      .catch(error => { console.log(error)});
  }
}
