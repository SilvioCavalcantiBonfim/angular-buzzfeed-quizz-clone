import { Injectable } from '@angular/core';
import { Quizz } from 'src/types/quizz.type';
import quizz_questions from '../../assets/data/quizz_questions.json';

@Injectable({
  providedIn: 'root'
})
export class QuizzControllerService {
  
  private quizz:Quizz = quizz_questions;

  private currentId: number = 1;

  private responses: any[] = [];

  constructor(){
    this.responses = this.quizz.questions.map(e => null);
  }

  set ID(id: number) {
    if(id < 1 || id >= this.quizz.questions.length+1)
      throw new Error("Invalid id.");
    this.currentId = id;
  }
  
  get ID() : number {
    return this.currentId;
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
