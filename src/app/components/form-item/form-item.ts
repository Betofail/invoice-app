import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  imports: [FormsModule],
  templateUrl: './form-item.html',
  styleUrl: './form-item.css',
  standalone: true,
})
export class FormItem {
  @Output() addItemEventEmitter = new EventEmitter<Item>();

  private counter: number = 4;

  item: any = { product: '', price: '', quantity: '' };

  onSubmit() {
    this.addItemEventEmitter.emit({ id: this.counter, ...this.item });
    this.counter++;
    this.item = { product: '', price: '', quantity: '' };
  }
}
