import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { ThemeService } from '../../../services/theme.service';

@Component({
    selector: 'app-navbar',
    imports: [NgOptimizedImage, RouterLink, Button],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar {
    readonly theme = inject(ThemeService);
}
