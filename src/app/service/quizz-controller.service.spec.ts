import { TestBed } from '@angular/core/testing';

import { QuizzControllerService } from './quizz-controller.service';

describe('QuizzControllerService', () => {
  let service: QuizzControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
