import { TestBed, inject } from '@angular/core/testing';

import { CourseServiceService} from './courseservice.service';

describe('CourseserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseServiceService]
    });
  });

  it('should be created', inject([CourseServiceService], (service: CourseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
