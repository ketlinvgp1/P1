import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
    imports: [RouterLink, CommonModule],
    selector: 'app-resultadobusca',
    styleUrl: './resultadobusca.css',
    templateUrl: './resultadobusca.html',
})

export class Resultadobusca {

    textoBusca: string = "";

    lista: Produto[] = [];

    ngOnInit() {

        // Pega o texto pesquisado
        let busca = localStorage.getItem("busca");

        if (busca != null) {

            this.textoBusca = busca;

        }

        // Pega a lista de produtos
        let produtos = localStorage.getItem("produtos");

        if (produtos != null) {

            let todos: Produto[] = JSON.parse(produtos);

            // Filtra os produtos pelo nome
            this.lista = todos.filter(obj =>
                obj.nome
                    .toLowerCase()
                    .includes(this.textoBusca.toLowerCase())
            );

        }

    }

    adicionarCesta(produto: Produto): void {

        let dados = localStorage.getItem('cesta');

        let cesta: any[] = [];

        if (dados != null) {

            cesta = JSON.parse(dados);

        }

        let encontrado = false;

        for (let item of cesta) {

            if (item.codigo == produto.codigo) {

                item.qtdCesta = item.qtdCesta + 1;

                item.valorTotal =
                    item.precoUnitario * item.qtdCesta;

                encontrado = true;

            }

        }

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

        localStorage.setItem(
            'cesta',
            JSON.stringify(cesta)
        );

        alert('Produto adicionado à cesta!');

    }

    verDetalhe(obj: Produto) {

        localStorage.setItem(
            "produto",
            JSON.stringify(obj)
        );

        location.href = "detalhe";

    }

}