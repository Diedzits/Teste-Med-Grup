
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CadastroEscolaService } from 'src/service/cadastro-escola.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {

  public escolas: any[];

  constructor( private cadastroEscolaService: CadastroEscolaService, 
               private router: Router) {}

  ngOnInit() {
    this.escolas = this.cadastroEscolaService.escolas;
  }


  openDetails(item: any){
    let navigation : NavigationExtras = {
      queryParams: {
        special: item.nome
      }
    }

    this.router.navigate(['/details'], navigation);
  }

}
