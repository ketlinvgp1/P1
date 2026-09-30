import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Busca } from './busca/busca';

@Component({
    imports: [RouterOutlet, RouterLink, Busca],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})

export class App {

    protected readonly title = signal('p1');

}