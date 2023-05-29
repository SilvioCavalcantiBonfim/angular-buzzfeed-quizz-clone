import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzQuestionComponent } from './quizz-question.component';

const routes: Routes = [
  { path: ':id', component: QuizzQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzQuestionRoutingModule { }
