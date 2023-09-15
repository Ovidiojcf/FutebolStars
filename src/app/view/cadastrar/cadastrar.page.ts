import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Time } from 'src/app/model/entities/Time';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  nome! : string;
  cidade! : string;
  pais! : string;
  estadio! : string;
  estadioCapacidade! : number;
  dataFundacao! : number;

  constructor(private alertController: AlertController,
    private router: Router,
    private firebase: FirebaseService) { }

  ngOnInit() {
  }

  cadastrar(){
    if(!this.nome || !this.cidade){
    this.presentAlert("Erro", "Todos os campos são obrigatórios!");
    }else{
      this.presentAlert("Sucesso", "Contato Cadastrado!");
      let novo : Time = new Time(this.nome, this.cidade);
      novo.pais = this.pais;
      novo.estadio = this.estadio;
      novo.estadioCapacidade = this.estadioCapacidade;
      novo.dataFundacao = this.dataFundacao;
      this.firebase.create(novo);
      this.router.navigate(["/home"]);
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
