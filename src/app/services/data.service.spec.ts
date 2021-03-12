import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { moviesProviderFactory } from '../app.module';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: moviesProviderFactory,
          deps: [DataService],
          multi: true
        }
      ],
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
