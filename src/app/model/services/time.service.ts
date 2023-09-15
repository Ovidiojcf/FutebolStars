import { Injectable } from '@angular/core';
import { Time } from '../entities/Time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  listadeTimes : Time[] = [];

  constructor() { 
    let c1 : Time = new Time ("Paysandu","Belém");
    c1.pais = "Brasil";
    c1.estadio = "Curuzu";
    c1.estadioCapacidade = 16200;
    c1.dataFundacao = 1914;
  }

  public obterTodos() : Time[]{
    return this.listadeTimes;
  }

  public obterPorIndice(indice : number): Time{
    return this.listadeTimes[indice];
  }

  public cadastrar(time: Time){
    this.listadeTimes.push(time);
  }

  public editar(time: Time, indice : number){
    this.listadeTimes[indice] = time;
  }

  public excluir(indice : number){
    this.listadeTimes.splice(indice, 1);
  }

  
}
