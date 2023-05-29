import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'quizz', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule)},
  {path: '**', redirectTo: 'quizz/question/1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
