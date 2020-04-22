import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'questionspage', component: QuestionsPageComponent},
  {path: 'askquestion', component:  AskQuestionComponent},
  {path: 'aboutus', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
