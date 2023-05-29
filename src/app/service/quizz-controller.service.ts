import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Quizz } from 'src/types/quizz.type';

@Injectable({
  providedIn: 'root'
})
export class QuizzControllerService {
  
  private quizz:Quizz = {
    title: '',
    questions: [],
    results: {
      A: '',
      B: ''
    }
  };

  private currentId: number = 1;

  private inLoading = true;

  private responses: any[] = [];

  constructor(private http: HttpClient){
    this.http.get<Quizz>('../assets/quizz_questions.json').subscribe({
      next: (r: Quizz) => {
        this.quizz = r;
        this.reset();
      },
      complete: () => this.inLoading = false
    })
  }

  isClear(id: number): boolean{
    return this.responses[id-1] === null;
  }

  reset(): void{
    this.responses = this.quizz.questions.map(e => null);
  }

  get Result(): string[]{
    const Count = Object.keys(this.quizz.results)
    .map(
      e => 
      //conta as resposta de A e B
      this.responses.reduce(
        (a,ee) => 
        (e === ee?.alias)?a+1:a,0
      )
    );
    return Count[0] > Count[1]?[this.quizz.results['A'], 'A']:[this.quizz.results['B'], 'B'];
  }

  get Title(): string{
    return this.quizz.title;
  }

  get TotalQuestions(): number{
    return this.quizz.questions.length;
  }

  set ID(id: number) {
    if(id < 1 || id >= this.quizz.questions.length+1)
      throw new Error("Invalid id.");
    this.currentId = id;
  }
  
  get ID() : number {
    return this.currentId;
  }

  get InLoading(): boolean{
    return this.inLoading;
  }
  
  get Questions(): any{
    return this.quizz.questions.find(e => e.id === this.currentId);
  }

  nextQuestion(): void{
    this.ID = this.currentId+1;
  }

  backQuestion(): void{
    this.ID = this.currentId-1;
  }

  setResponse(id: number): void{
    this.responses[this.currentId-1] = this.quizz.questions.find(e => e.id === this.currentId)?.options.find(e => e.id === id);
  }

  isFinish(): boolean{
    return this.responses.indexOf(null) === -1;
  }

  isOptionSelected(id: number): boolean{
    return id === this.responses[this.currentId-1]?.id;
  }  
}
