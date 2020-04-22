import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css']
})
export class QuestionsPageComponent implements OnInit {
  askButton: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  if(){
    this.askButton = true;
  }
}
