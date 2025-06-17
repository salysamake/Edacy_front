import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative bg-blue-600">
      <!-- Hero Section -->
      <div class="relative pt-24 pb-32 flex content-center items-center justify-center min-h-[85vh]">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" style="background-image: url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop');">
          <span class="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="text-white">
                <h1 class="text-5xl font-semibold leading-tight mb-4">
                  Bienvenue chez Africa Technologies
                </h1>
                <p class="mt-4 text-lg">
                  Votre partenaire de confiance pour tous vos besoins en technologie. 
                  Découvrez notre large gamme de produits électroniques de qualité.
                </p>
                <button 
                  (click)="navigateToProducts()"
                  class="mt-8 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Découvrir nos produits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <section class="pb-20 bg-white -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h6 class="text-xl font-semibold">Produits de Qualité</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Une sélection rigoureuse des meilleurs produits technologiques du marché.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h6 class="text-xl font-semibold">Service Rapide</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Livraison rapide et service client disponible 7j/7.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h6 class="text-xl font-semibold">Garantie Fiable</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Tous nos produits sont garantis pour votre tranquillité d'esprit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="pb-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Découvrez nos catégories
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Nous proposons une large gamme de produits technologiques pour répondre à tous vos besoins.
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div class="bg-blue-500 text-white rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div class="text-gray-700">Ordinateurs et Laptops</div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div class="bg-blue-500 text-white rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div class="text-gray-700">Smartphones et Tablettes</div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div class="bg-blue-500 text-white rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div class="text-gray-700">Accessoires et Périphériques</div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1770&auto=format&fit=crop"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <h4 class="text-xl font-bold text-white">
                    Notre Engagement
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Nous nous engageons à vous fournir les meilleurs produits technologiques avec un service client exceptionnel.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToProducts() {
    this.router.navigate(['/products']);
  }
}