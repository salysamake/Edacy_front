import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Nos Produits</h2>
          <div class="flex flex-wrap gap-4 items-center">
            <div class="flex-1">
              <input
                type="text"
                [(ngModel)]="searchTerm"
                (ngModelChange)="filterProducts()"
                placeholder="Rechercher un produit..."
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <select
              [(ngModel)]="selectedCategory"
              (ngModelChange)="filterProducts()"
              class="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Toutes les catégories</option>
              <option value="ordinateurs">Ordinateurs</option>
              <option value="telephones">Téléphones</option>
              <option value="televisions">Télévisions</option>
              <option value="electromenager">Électroménager</option>
            </select>
            <select
              [(ngModel)]="sortBy"
              (ngModelChange)="sortProducts()"
              class="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Trier par nom</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        @if (filteredProducts.length === 0) {
          <div class="text-center py-12">
            <p class="text-xl text-gray-600">Aucun produit trouvé</p>
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            @for (product of filteredProducts; track product.id) {
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative pb-[56.25%]">
                  <img 
                    [src]="product.imageUrl" 
                    [alt]="product.name"
                    class="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                  >
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
                  <p class="text-gray-600 mb-4">{{ product.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-blue-600">{{ product.price | currency:'EUR':'symbol':'1.2-2' }}</span>
                    @if (product. stockQuantity > 0) {
                      <button 
                        (click)="addToCart(product)"
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Ajouter au panier
                      </button>
                    } @else {
                      <span class="text-red-600 font-semibold">Rupture de stock</span>
                    }
                  </div>
                  @if (product. stockQuantity > 0) {
                    <p class="text-sm text-gray-500 mt-2">
                      Stock disponible: {{ product.stockQuantity}}
                    </p>
                  }
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';
  sortBy: string = 'name';

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = [...products];
        this.filterProducts();
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits:', error);
        this.products = [];
        this.filteredProducts = [];
      }
    });
  }

  filterProducts() {
    if (!Array.isArray(this.products)) {
      this.filteredProducts = [];
      return;
    }

    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.selectedCategory || product.categoryName === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    this.sortProducts();
  }

  sortProducts() {
    this.filteredProducts.sort((a, b) => {
      switch (this.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }

  addToCart(product: Product) {
    //this.cartService.addToCart(product);
  }
}