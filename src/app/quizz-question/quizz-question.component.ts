import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { QuizzControllerService } from '../service/quizz-controller.service';

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.css']
})
export class QuizzQuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute, public quizzControllerService: QuizzControllerService, private router: Router){}

  ngOnInit(): void {
    try {
      this.quizzControllerService.ID = Number(this.route.snapshot.paramMap.get('id'));
    } catch (error) {
      this.router.navigate(['/quizz','1']);
    }
  }

  selectResponse(obj: any): void{
    this.quizzControllerService.setResponse(obj);
    this.navegationQuestion(this.quizzControllerService.ID+1);
  }

  navegationQuestion(id: number): void{
    try {
      this.quizzControllerService.ID = id;
    } catch (error) {}
    this.router.navigate(['/quizz',this.quizzControllerService.ID]);
  }
}
