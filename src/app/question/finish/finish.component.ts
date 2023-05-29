import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzControllerService } from 'src/app/service/quizz-controller.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent {
  aux: string = 'A';
  constructor( public quizzControllerService: QuizzControllerService,  private router: Router){
    if(!quizzControllerService.isFinish())
      this.router.navigate(['/quizz','1']);
  }

  onClick(): void{
    this.quizzControllerService.reset();
    this.router.navigate(['/quizz','1']);
  }
}
