import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        if (!this.authService.token.length) {
            console.log('No estás logueado');
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }
}