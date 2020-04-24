import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-question-main',
  templateUrl: './question-main.component.html',
  styleUrls: ['./question-main.component.css']
})
export class QuestionMainComponent implements OnInit {

  questions: Array<any>;

  anything: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let userId = 1;
    let path = 'http://localhost/Server/api/qahome?userid=' + userId; 
    this.http.get(path).subscribe((data: Array<Question>)=>{
      this.questions = data;
      for(let i = 0; i < data.length; i++){
        this.http
        .get('http://localhost/Server/api/questionandtopic?questionId='+this.questions[i].question_id)
        .subscribe((res: QuestionTags)=>{
          console.log(res);
          this.questions[i].question_tag_id = res.topicId;
          this.questions[i].question_tag_name = res.topicName;
        })
      }
    })

    // Non HTTP questions for testing
   // this.questions = [{"question_id":1,"question_title":"How to print hello world in cpp","question_desc":"printf creating issue","question_views":322,"question_supports":2,"question_challenges":0,"question_asked_by_user_id":1,"question_asked_by_user_name":"Govind Choudhary","question_timestamp":"2020-04-21T05:26:22.7","total_answers":2,"first_answer_string":"may not be correct","first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"2020-04-21T06:24:13.697"},{"question_id":2,"question_title":"How to exit out of teminal","question_desc":"in mac, command + c not working","question_views":29,"question_supports":0,"question_challenges":1,"question_asked_by_user_id":2,"question_asked_by_user_name":"Prakhar Londhe","question_timestamp":"2020-04-21T05:27:01.433","total_answers":1,"first_answer_string":"2nd Question Answer","first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"2020-04-21T08:42:31.807"},{"question_id":3,"question_title":"important question","question_desc":"imp description","question_views":564,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":3,"question_asked_by_user_name":"Harsh Hirani","question_timestamp":"2020-04-21T10:40:35.867","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":7,"question_title":"5th title","question_desc":"5th desc","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":5,"question_asked_by_user_name":"Sagar Jain","question_timestamp":"2020-04-21T22:18:21.607","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":8,"question_title":"Back to the old question","question_desc":"Back to the old description","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":5,"question_asked_by_user_name":"Sagar Jain","question_timestamp":"2020-04-21T22:19:46.417","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":16,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-21T23:33:30.107","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":17,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-21T23:34:28.683","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":18,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-21T23:35:07.943","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":19,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-21T23:36:48.853","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":20,"question_title":"yyyyyyyyy","question_desc":"zzzzzzzzz","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":5,"question_asked_by_user_name":"Sagar Jain","question_timestamp":"2020-04-21T23:37:27.543","total_answers":2,"first_answer_string":"hey accept my answer .....!!!","first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"2020-04-22T03:20:02.473"},{"question_id":21,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-21T23:39:15.227","total_answers":3,"first_answer_string":"hey accept my answer .....!!!","first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"2020-04-22T03:24:51.833"},{"question_id":23,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-21T23:42:28.83","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":24,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-21T23:44:24.01","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":25,"question_title":"yyyyyyyyy","question_desc":"zzzzzzzzz","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":5,"question_asked_by_user_name":"Sagar Jain","question_timestamp":"2020-04-21T23:45:29.647","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":26,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-22T00:00:59.323","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":27,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-22T00:04:09.197","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":28,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-22T00:04:18.613","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":29,"question_title":"11111111111111111111111111111","question_desc":"xxxxxxxxxxxxxxxxxxxxxxxxxx","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":4,"question_asked_by_user_name":"Shristi Katyayani","question_timestamp":"2020-04-22T00:04:24.507","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"},{"question_id":31,"question_title":"How make a channel private on Slack.","question_desc":"I have Already Created One channel","question_views":0,"question_supports":0,"question_challenges":0,"question_asked_by_user_id":5,"question_asked_by_user_name":"Sagar Jain","question_timestamp":"2020-04-22T01:29:00.453","total_answers":0,"first_answer_string":null,"first_answer_supports":0,"first_answer_challenges":0,"first_answer_timestamp":"0001-01-01T00:00:00"}]

  }

}

class Question{
  question_id: number;
  question_title: string;
  question_desc: string;
  question_views: number;
  question_supports: number;
  question_challenges: number;
  question_asked_by_user_id: number;
  question_asked_by_user_name: string;
  question_timestamp: string;
  total_answers: number;
  first_answer_string: string;
  first_answer_supports: number;
  first_answer_challenges: number;
  first_answer_timestamp: string;
  question_tag_id: Array<number>;
  question_tag_name: Array<string>;
}

class QuestionTags{
  questionId: number;
  topicId: number;
  topicName: string;
}
