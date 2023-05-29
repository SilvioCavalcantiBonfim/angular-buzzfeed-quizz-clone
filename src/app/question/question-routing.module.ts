import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  { path: 'question/:id', component: QuestionComponent, pathMatch: 'full'},
  {path: 'finish', component: FinishComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'quizz/question/1'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
