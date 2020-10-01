import { TestBed } from '@angular/core/testing';
import { CadastroEscolaService } from './cadastro-escola.service';


describe('CadastroEscolaService', () => {
  let service: CadastroEscolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroEscolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
