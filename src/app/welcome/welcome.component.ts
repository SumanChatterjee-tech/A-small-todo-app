import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  toShowScreen="";
  constructor(private activateRoute:ActivatedRoute, private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {
    this.toShowScreen = this.activateRoute.snapshot.params['name'];
  }

}
