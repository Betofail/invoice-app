import { Component, signal } from '@angular/core';
import { InvoiceComponent } from './components/invoice/invoice';

@Component({
  selector: 'app-root',
  imports: [InvoiceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('invoice-app');
}
