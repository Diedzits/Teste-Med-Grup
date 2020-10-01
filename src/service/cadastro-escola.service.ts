import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroEscolaService {

  public escolas: any = [{ 
    nome: "Escola 01",
    endereco: "Rua 01",
    numero: "233",
    fone: "999999999",
    turmas: [{escola: "Escola 01", nomeTurma: "98", numeroSala: "123"}, {escola: "Escola 01", nomeTurma: "98", numeroSala: "123"},{escola: "Escola 01", nomeTurma: "98", numeroSala: "123"}]
   },
   { 
    nome: "Escola 02",
    endereco: "Rua 01",
    numero: "233",
    fone: "999999999",
    turmas: []
   },
   { 
    nome: "Escola 03",
    endereco: "Rua 01",
    numero: "233",
    fone: "999999999",
    turmas: []
   }]

  constructor() { }
}
