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
        this.listadeTimes = res.map(time =>{
          return {
            id: time.payload.doc.id,
            ...time.payload.doc.data() as any
          }as Contato
        })
      });
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(time : Time){
    this.router.navigateByUrl("/detalhar", {
      state: {time: Time}});
  }
}
