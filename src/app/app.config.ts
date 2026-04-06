import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.dark',
                    // @ts-ignore
                    colorSchemeOverride: {
                        light: {
                            primary: {
                                50: '#fff1e6',
                                100: '#fff1e6',
                                200: '#ffe6cc',
                                300: '#ffdab3',
                                400: '#ffcf99',
                                500: '#ff7000',
                                600: '#cc5a00',
                                700: '#994400',
                                800: '#662d00',
                                900: '#331700',
                            },
                        },
                        dark: {
                            primary: {
                                50: '#fff1e6',
                                100: '#fff1e6',
                                200: '#ffe6cc',
                                300: '#ffdab3',
                                400: '#ffcf99',
                                500: '#ff7000',
                                600: '#cc5a00',
                                700: '#994400',
                                800: '#662d00',
                                900: '#331700',
                            },
                        },
                    },
                },
            },
        }),
    ],
};
