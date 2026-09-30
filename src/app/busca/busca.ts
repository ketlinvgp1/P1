import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    imports: [FormsModule],
    selector: 'app-busca',
    styleUrl: './busca.css',
    templateUrl: './busca.html',
})

export class Busca {

    textoBusca: string = "";

    constructor(private router: Router) {}

    buscar() {

        if (this.textoBusca.trim() != "") {

            // Salva o texto pesquisado
            localStorage.setItem(
                "busca",
                this.textoBusca
            );

            // Vai para a página de resultados
            this.router.navigate(['/resultadobusca']);
        }

    }

}