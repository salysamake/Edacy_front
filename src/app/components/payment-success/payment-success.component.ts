import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Paiement réussi !</h2>
        <p class="text-gray-600 mb-6">
          Votre commande a été confirmée et sera traitée dans les plus brefs délais.
        </p>
        @if (transactionId) {
          <p class="text-sm text-gray-500 mb-6">
            ID de transaction: {{ transactionId }}
          </p>
        }
        
        <button
          (click)="continueShopping()"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continuer vos achats
        </button>
      </div>
    </div>
  `
})
export class PaymentSuccessComponent {
  transactionId: string | null = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.transactionId = (navigation.extras.state as any).transactionId;
    }
  }

  continueShopping() {
    this.router.navigate(['/products']);
  }
}