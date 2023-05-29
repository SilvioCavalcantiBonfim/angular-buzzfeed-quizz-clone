import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'quizz', loadChildren: () => import('./quizz-question/quizz-question.module').then(m => m.QuizzQuestionModule) },
  {path: '**', redirectTo: 'quizz/1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
