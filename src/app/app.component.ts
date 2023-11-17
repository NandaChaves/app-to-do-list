import { Component, OnInit } from '@angular/core';
import Cartao from './cartao/cartao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  tarefas = [
    {
      nome: 'Estudar Animação 3D',
      descricao: 'Melhorar os conhecimentos nesses princípios de programação',
      checklist: [
        {
          nome: 'Princípios da animação',
          concluido: true,
        },
        {
          nome: 'Animación básica e efeitos',
          concluido: false,
        },
        {
          nome: 'Animação de câmeras',
          concluido: false,
        },
        {
          nome: 'Animação de personagens.',
          concluido: false,
        },
        {
          nome: 'Músculos',
          concluido: false,
        }
      ]
    },
    {
      nome: 'Estudar Orientação a Objetos',
      descricao: 'Compreender orientação a objetos e aplicar em exercícios práticos',
      checklist: [
        {
          nome: 'Abstração',
          concluido: true,
        },
        {
          nome: 'Encapsulamento',
          concluido: false,
        },
        {
          nome: 'Herança',
          concluido: false,
        },
        {
          nome: 'Polimorfismo',
          concluido: false,
        },
      ]
    }
  ];

  cartoes: Cartao[] = [];

  ngOnInit(): void {
    //pega cada tarefa
    this.tarefas.forEach((t) => {
      //e cria um objeto cartao
      let cartao = new Cartao();
      cartao.nome = t.nome;
      cartao.descricao = t.descricao;
      cartao.checklist = t.checklist;
      //e adicionando no array de cartões
      this.cartoes.push(cartao);
    });
  }



}