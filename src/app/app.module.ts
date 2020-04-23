import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogInterestComponent } from './blog-interest/blog-interest.component';
import { QaInterestComponent } from './qa-interest/qa-interest.component';
import { BuPreferenceComponent } from './bu-preference/bu-preference.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuestionMainComponent } from './question-main/question-main.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogInterestComponent,
    QaInterestComponent,
    BuPreferenceComponent,
    QuestionsPageComponent,
    AskQuestionComponent,
    AboutUsComponent,
    QuestionMainComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
