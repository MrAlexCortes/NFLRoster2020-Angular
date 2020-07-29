import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  //* properties
  public teams;

  //* constructor
  constructor(
    private teamsService : TeamsService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  //* on init
  ngOnInit(): void {
    this.getTeams();
  }

  //* methods
  getTeams(){
    console.log('getting teams');
    this.teamsService.getAllTeams()
    .then(response => {console.log(response); this.teams = response })
      .catch(error => console.log(error));
  }

  redirectPlayers(id) {
    console.log('redirecting to team ' + id);
    this.router.navigate([id], {relativeTo: this.activatedRoute});
  }


  



}
