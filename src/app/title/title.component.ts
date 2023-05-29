import { Component } from '@angular/core';
import { QuizzControllerService } from '../service/quizz-controller.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  constructor(public quizzControllerService: QuizzControllerService){}
}
