import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SocialAuthForm } from '../../components/forms/social-auth-form/social-auth-form';

@Component({
    selector: 'app-auth-form',
    imports: [NgOptimizedImage, SocialAuthForm],
    templateUrl: './auth-form.html',
    styleUrl: './auth-form.css',
})
export class AuthForm {}
