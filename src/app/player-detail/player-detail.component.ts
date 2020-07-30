import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  public playerId;
  public player;
  constructor(
    private playersService : PlayersService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { this.playerId = params.id })
    this.getPlayerInfo();
  }

  getPlayerInfo() : void {
    console.log('getting player info');
    this.playersService.getPlayerDetail(this.playerId)
    .then(response => {
      console.log(response); this.player = response})
      .catch(error => { console.log(error)});
  }

}
