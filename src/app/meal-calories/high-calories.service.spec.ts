import { TestBed } from '@angular/core/testing';

import { HighCaloriesService } from './high-calories.service';

describe('HighCaloriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighCaloriesService = TestBed.get(HighCaloriesService);
    expect(service).toBeTruthy();
  });
});
