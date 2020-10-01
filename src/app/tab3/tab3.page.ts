import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { CadastroEscolaService } from 'src/service/cadastro-escola.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  turma = {}
  escolas: any[];

  constructor(private cadastroEscolaService: CadastroEscolaService, private alertController: AlertController ) {}

  ngOnInit() {
    this.escolas = this.cadastroEscolaService.escolas;
  }

  public logForm() {
    this.cadastroEscolaService.escolas.map( val => {
      if(val.nome === this.turma.escola){
        val.turmas.push(this.turma);
      }
    });
    this.presentAlert();
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cadastro De Turma',
      message: 'Cadastro realizado com sucesso.',
      buttons: ['OK']
    });
    await alert.present();
    this.turma = {}
  }

}
