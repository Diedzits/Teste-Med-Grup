import { Component } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CadastroEscolaService } from 'src/service/cadastro-escola.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public escola: any = {}

  get nome() {
    return this.cadastrarEscola.get("nome");
  }

  get endereco() {
    return this.cadastrarEscola.get("endereco");
  }

  get numero() {
    return this.cadastrarEscola.get("numero");
  }

  get fone() {
    return this.cadastrarEscola.get("fone");
  }

  public errorMessages = {
    nome: [
      { type: 'required', message: 'Nome do colegio é obrigatorio ' }
    ],
    endereco: [
      { type: 'required', message: 'O endereço é obrigatorio' }
    ],
    numero: [
      { type: 'required', message: 'Numero é obrigatorio' }
    ],
    fone: [
      { type: 'required', message: 'Telefone é obrigatorio' }
    ]
  };

  public cadastrarEscola = this.formBuilder.group({
    id:[''],
    nome: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    numero: ['', [Validators.required]],
    fone: ['', [Validators.required]],
    turmas: this.formBuilder.array([])
  });

  constructor(private cadastroEscolaService: CadastroEscolaService, 
              private alertController: AlertController,
              private formBuilder: FormBuilder ) {}
  
  public submit() {
    this.cadastrarEscola.value.id = Math.floor(Math.random() * 256);
    this.cadastroEscolaService.escolas.push(this.cadastrarEscola.value);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cadastro De Escola',
      message: 'Cadastro realizado com sucesso.',
      buttons: ['OK']
    });
    
    await alert.present();
    this.cadastrarEscola =  this.formBuilder.group({
      id:[''],
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      fone: ['', [Validators.required]],
      turmas: this.formBuilder.group({
        idEscola: [''],
        nomeTurma: [''],
        numeroSala:['']
      })
    });
  }


}
