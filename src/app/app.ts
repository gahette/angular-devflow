import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navigation/navbar/navbar';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Navbar],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    private title = inject(Title);
    private meta = inject(Meta);

    constructor() {
        this.title.setTitle('AngularDevflow');

        this.meta.updateTag({
            name: 'description',
            content:
                ' A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
        });
    }
}
