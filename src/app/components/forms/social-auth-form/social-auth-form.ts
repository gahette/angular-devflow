import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
    selector: 'app-social-auth-form',
    imports: [Button, NgOptimizedImage],
    templateUrl: './social-auth-form.html',
    styleUrl: './social-auth-form.css',
})
export class SocialAuthForm {
    readonly socialStyles: string =
        'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5';
}
