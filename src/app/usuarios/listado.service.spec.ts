import { TestBed } from '@angular/core/testing';

import { ListadoService } from './listado/listado.service';

describe('ListadoService', () => {
  let service: ListadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
