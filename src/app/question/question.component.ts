import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzControllerService } from '../service/quizz-controller.service';
import { trigger,state,style,transition,animate, sequence} from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute, public quizzControllerService: QuizzControllerService, private router: Router){}

  ngOnInit(): void {
    try {
      this.quizzControllerService.ID = Number(this.route.snapshot.paramMap.get('id'));
    } catch (error) {
      this.router.navigate(['/quizz','1']);
    }
  }

  selectResponse(obj: any): void{
    if(this.quizzControllerService.isClear(this.quizzControllerService.ID)){
      this.quizzControllerService.setResponse(obj);
      this.navegationQuestion(this.quizzControllerService.ID+1);
    }else{
      this.quizzControllerService.setResponse(obj);
    }
  }

  navegationQuestion(id: number): void{
    try {
      this.quizzControllerService.ID = id;
    } catch (error) {}
    this.router.navigate(['/quizz/question',this.quizzControllerService.ID]);
  }

  get Pages(): number[]{
    return [...Array(this.quizzControllerService.TotalQuestions)];
  }
}