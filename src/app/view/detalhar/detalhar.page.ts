import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from 'src/app/model/entities/Time';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  time! : Time;
  nome! : string;
  cidade! : string;
  pais! : string;
  estadio! : string;
  estadioCapacidade! : number;
  dataFundacao! : number;
  edicao : boolean = true;

  constructor(private firebase: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.time = history.state.time;
    this.nome = this.time.nome;
    this.cidade = this.time.cidade;
    this.pais = this.time.pais;
    this.estadio = this.time.estadio;
    this.estadioCapacidade = this.time.estadioCapacidade;
    this.dataFundacao = this.time.dataFundacao;
  }

  habilitarEdicao(){
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  editar(){
    let novo : Time = new Time(this.nome,this.cidade);
    novo.pais = this.pais;
    novo.estadio = this.estadio;
    novo.estadioCapacidade = this.estadioCapacidade;
    novo.dataFundacao = this.dataFundacao;
    this.firebase.update(novo, this.time.id)
    this.router.navigate(['/home']);
  }

  excluir(){
    this.firebase.delete(this.time.id);
    this.router.navigate(['/home']);
  }

}
