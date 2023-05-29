import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzQuestionRoutingModule } from './quizz-question-routing.module';
import { QuizzQuestionComponent } from './quizz-question.component';


@NgModule({
  declarations: [
    QuizzQuestionComponent
  ],
  imports: [
    CommonModule,
    QuizzQuestionRoutingModule
  ]
})
export class QuizzQuestionModule { }
