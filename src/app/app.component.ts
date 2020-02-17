import { Component } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <router-outlet></router-outlet>

    <!--footer-->
    <app-footer></app-footer>
    
  `,
  styles: []
})
export class AppComponent {
  
  constructor() {}
}
