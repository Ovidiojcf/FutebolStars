import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from 'src/app/model/entities/Time';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listadeTimes : Time[] = [];

  constructor(private router: Router,
    private firebase: FirebaseService){
      this.firebase.read()
      .subscribe(res => {
        this.lista_contatos = res.map(contato =>{
          return {
            id: contato.payload.doc.id,
            ...contato.payload.doc.data() as any
          }as Contato
        })
      });
  }

  cadastrar(){
    this.listadeTimes.push({"nome" : this.nome, "cidade" :
   this.cidade});
    }
}
