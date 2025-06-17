import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product, Category } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-6">Ajouter un nouveau produit</h2>
      <form (ngSubmit)="onSubmit()" class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom du produit</label>
          <input
            type="text"
            id="name"
            [(ngModel)]="product.name"
            name="name"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
        </div>

        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="description"
            [(ngModel)]="product.description"
            name="description"
            rows="3"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Prix (€)</label>
          <input
            type="number"
            id="price"
            [(ngModel)]="product.price"
            name="price"
            min="0"
            step="0.01"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
        </div>

        <div class="mb-4">
          <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
          <select
            id="category"
            [(ngModel)]="product.categoryName"
            name="category"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="ordinateurs">Ordinateurs</option>
            <option value="telephones">Téléphones</option>
            <option value="televisions">Télévisions</option>
            <option value="electromenager">Électroménager</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="image" class="block text-sm font-medium text-gray-700 mb-1">Image du produit</label>
          <input
            type="file"
            id="image"
            (change)="onFileSelected($event)"
            accept="image/*"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
          @if (imagePreview) {
            <img [src]="imagePreview" alt="Aperçu" class="mt-2 max-w-xs rounded">
          }
        </div>

        <div class="mb-6">
          <label for="stock" class="block text-sm font-medium text-gray-700 mb-1">Stock disponible</label>
          <input
            type="number"
            id="stock"
            [(ngModel)]="product.stockQuantity"
            name="stock"
            min="0"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
        </div>

        <div class="flex justify-end">
          <button 
            type="submit" 
            class="btn-primary"
            [disabled]="isSubmitting"
          >
            {{ isSubmitting ? 'Ajout en cours...' : 'Ajouter le produit' }}
          </button>
        </div>

        @if (errorMessage) {
          <div class="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {{ errorMessage }}
          </div>
        }
      </form>
    </div>
  `
})
export class AddProductComponent {
  product: Product = {
    id: 1,
    name: '',
    description: '',
    price: 0,
    categoryName: 'ordinateurs',
    imageUrl: '',
   stockQuantity: 0
  };

  imagePreview: string | null = null;
  selectedFile: File | null = null;
  isSubmitting: boolean = false;
  errorMessage: string | null = null;
  productData!: Product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      console.log("file", this.selectedFile);
      this.product.imageUrl = this.selectedFile.name;
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.errorMessage = null;

    if (this.selectedFile) {
     
      console.log("Product", this.product);
      
        this.product.name= this.product.name || '',
        this.product.description=this.product.description || '',
        this.product.price= this.product.price || 0,
        this.product.categoryName= this.product.categoryName || 'ordinateurs',
        this.product.imageUrl= this.product.imageUrl || '',
        this.product.stockQuantity= this.product.stockQuantity || 0,
        //orderItems: this.product.orderItems || []
      
      
      
      this.productService.addProduct(this.product).subscribe({
        next: (newProduct) => {
          console.log('Produit ajouté avec succès:', newProduct);
          this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du produit:', error);
          this.errorMessage = 'Une erreur est survenue lors de l\'ajout du produit. Veuillez réessayer.';
          this.isSubmitting = false;
        }
      });
    }
  }
}