import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  path: string;
  orderBy: any = ["xpPoints", "qCount", "aCount"];
  buttonFilter: number = 1;
  users: Array<User>;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.path = 'http://localhost/Server/api/leaderboard';
    this.http.get(this.path).subscribe((data: Array<User>) => {
      this.users = data;
    })

  }

  filter(event, index){
    console.log(index);
    this.buttonFilter = index;
    this.path = 'http://localhost/Server/api/leaderboard';
    this.path += "?orderBy="+this.orderBy[index-1];
    this.http.get(this.path).subscribe((data: Array<User>) => {
      this.users = data;
    })
  }



}

class User{
  user_id: number;
  user_name: string;
  user_full_name: string;
  user_image_url: string;
  xp_points: number;
  questions_asked: number;
  answers_given: number;
}
