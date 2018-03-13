import { TestBed, inject } from '@angular/core/testing';

import { CastVoteService } from './cast-vote.service';

describe('CastVoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CastVoteService]
    });
  });

  it('should be created', inject([CastVoteService], (service: CastVoteService) => {
    expect(service).toBeTruthy();
  }));
});
