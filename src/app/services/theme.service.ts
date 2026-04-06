import { effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';

export const DARK_MODE_KEY = 'darkMode';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly platformId = inject(PLATFORM_ID);
    readonly isDark = signal(false);

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            this.isDark.set(localStorage.getItem(DARK_MODE_KEY) === 'true');
        }

        effect(() => {
            if (isPlatformBrowser(this.platformId)) {
                document.documentElement.classList.toggle('dark', this.isDark());
                localStorage.setItem(DARK_MODE_KEY, String(this.isDark()));
            }
        });
    }

    toggle() {
        this.isDark.update(v => !v);
    }
}
