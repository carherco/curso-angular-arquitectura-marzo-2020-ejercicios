import { TestBed } from '@angular/core/testing';

import { ReduxUserStateService } from './redux-user-state.service';

describe('ReduxUserStateService', () => {
  let service: ReduxUserStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReduxUserStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
