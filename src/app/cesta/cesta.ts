import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {

  produtos: any[] = [];

  constructor() {}

  ngOnInit(): void {

    let dados = localStorage.getItem('cesta');

    if (dados != null) {
      this.produtos = JSON.parse(dados);
    }

  }

  remover(codigo: number): void {

    this.produtos = this.produtos.filter(
      produto => produto.codigo !== codigo
    );

    localStorage.setItem(
      'cesta',
      JSON.stringify(this.produtos)
    );

  }

  total(): number {

    let total = 0;

    for (let produto of this.produtos) {
      total = total + produto.valorTotal;
    }

    return total;
  }

}