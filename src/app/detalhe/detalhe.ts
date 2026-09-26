import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {
  obj:Produto = new Produto();
  mensagem:string = "";

  ngOnInit(){
    let json = localStorage.getItem("produto");
    if(json==null){
      this.mensagem = "Produto Invalido, verifique!";
    }  else {
      this.mensagem = "";
      this.obj = JSON.parse(json);
    }
  }
  
   adicionarCesta(produto: Produto): void {

  // Recupera a cesta do localStorage
  let dados = localStorage.getItem('cesta');

  let cesta: any[] = [];

  // Verifica se a cesta já existe
  if (dados != null) {

    // Desserializa a cesta
    cesta = JSON.parse(dados);

  }

  let encontrado = false;

  // Verifica se o produto já está na cesta
  for (let item of cesta) {

    if (item.codigo == produto.codigo) {

      item.qtdCesta = item.qtdCesta + 1;

      item.valorTotal = item.precoUnitario * item.qtdCesta;

      encontrado = true;
    }
  }

  // Se o produto ainda não estiver na cesta
  if (encontrado == false) {

    let preco = produto.promo > 0
      ? produto.promo
      : produto.valor;

    let item = {
      ...produto,
      qtdCesta: 1,
      precoUnitario: preco,
      valorTotal: preco
    };

    cesta.push(item);
  }

  // Serializa e grava a cesta
  localStorage.setItem(
    'cesta',
    JSON.stringify(cesta)
  );

  alert('Produto adicionado à cesta!');
}
  

}