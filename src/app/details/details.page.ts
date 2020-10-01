import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CadastroEscolaService } from 'src/service/cadastro-escola.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private cadastroEscolaService: CadastroEscolaService ) { 
    this.route.queryParams.subscribe(params => {
      if(params && params.special){
        this.cadastroEscolaService.escolas.map( val => {
          if(val.nome === params.special){
            if(val.turmas.length != 0){
              this.data = val.turmas;
            }
          }
        });
      }
    });
  }

  ngOnInit() {
  }

}
