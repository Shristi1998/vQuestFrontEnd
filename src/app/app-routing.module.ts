import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuestionMainComponent } from './question-main/question-main.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {path: 'questionspage', component: QuestionsPageComponent},
  {path: 'askquestion', component:  AskQuestionComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'questionMain', component: QuestionMainComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
