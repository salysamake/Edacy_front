import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { AddProductComponent } from './app/components/add-product/add-product.component';
import { HomeComponent } from './app/components/home/home.component';


import { PaymentSuccessComponent } from './app/components/payment-success/payment-success.component';
import { map } from 'rxjs/operators';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
 
 
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, AsyncPipe, CommonModule],
  template: `
    <header class="bg-white shadow-md fixed w-full z-50">
      <nav class="container mx-auto px-4 py-2">
        <div class="flex justify-between items-center">
          <a routerLink="/" class="flex items-center space-x-2">
            <img src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/africa-tech-logo.png" alt="Africa Tech Logo" class="h-16">
          </a>
          <div class="space-x-6">
            <a routerLink="/" 
               routerLinkActive="text-blue-600 font-semibold" 
               [routerLinkActiveOptions]="{exact: true}" 
               class="text-gray-600 hover:text-blue-600">Accueil</a>
            <a routerLink="/products" 
               routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-600 hover:text-blue-600">Produits</a>
            <a routerLink="/add-product" 
               routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-600 hover:text-blue-600">Ajouter un produit</a>
            <a routerLink="/cart" 
               routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-600 hover:text-blue-600">
              Panier
              <!--span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full ml-2">
                {{ cartItemCount$ | async }}
              </span-->
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main class="pt-20">
      <router-outlet></router-outlet>
    </main>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/12 mb-8 md:mb-0">
            <h3 class="text-xl font-semibold mb-4">Africa Technologies</h3>
            <p class="text-gray-400">
              Votre partenaire technologique de confiance en Afrique.
            </p>
          </div>
          <div class="w-full md:w-4/12 mb-8 md:mb-0">
            <h3 class="text-xl font-semibold mb-4">Contact</h3>
            <p class="text-gray-400">
              Email: contact&#64;africatech.com<br>
              Tél: +123 456 789
            </p>
          </div>
          <div class="w-full md:w-4/12">
            <h3 class="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class App {
  
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
   
  ]
}).catch(err => console.error(err));