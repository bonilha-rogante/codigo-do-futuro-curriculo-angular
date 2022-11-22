import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clientes:Cliente[] = [
    {
      id:1,
      nome: 'Leandro',
      cpf: 33333333333,
      telefone: 11999999999,
      endereco: 'Rua teste, 123',
      data: new Date(),
      valor: 33.35,
    },
    {
      id: 2,
      nome: 'Fernanda',
      cpf: 44444444444,
      telefone: 11999999999,
      endereco: 'Rua av, 123',
      data: new Date(),
      valor: 4533,
      
    },
    {
      id: 3,
      nome: 'Guilherme',
      cpf: 77777777777,
      telefone: 11999999999,
      endereco: 'Rua Floriada, 123',
      data: new Date(),
      valor: 1269.03,
    }
  ]

  constructor() { }

  public cliente:Cliente = {} as Cliente

  ngOnInit(): void {
    //this.cliente = this.clientes[0]  
  }

  clicou(){
    let id = this.clientes.length + 1
    let novoCliente: Cliente = {
      id: id,
      nome: this.cliente.nome,
      cpf: 77777777777,
      telefone: this.cliente.telefone,
      endereco: this.cliente.endereco,
      data: new Date(),
      valor: 1269.03,
    } as Cliente
    this.clientes.push(novoCliente)
  }
}
