import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { AskForm } from '../askForm';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  url: string =  'http://10.89.241.17/Server/api/question';
  questionid: number;
  constructor(private httpClient: HttpClient, private router: Router) { }
    askForm = new FormGroup({
    QuestionTitle: new FormControl('', Validators.required),
    QuestionDescription: new FormControl(''),
      });
    askFormObj = new AskForm(undefined, undefined, 1);
    ngOnInit(): void {

  }
  submitQuestion() {
    console.log(this.askFormObj);
    this.httpClient.post(this.url, this.askFormObj, {headers : new HttpHeaders({'content-type': 'application/json'})}

    )
      .subscribe(data => {
          console.log(data);
      });
  }
}
