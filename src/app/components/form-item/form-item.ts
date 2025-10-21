import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

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

  onSubmit(itemForm: NgForm): void {
    if (itemForm.valid) {
      this.addItemEventEmitter.emit({ id: this.counter, ...this.item });
      this.counter++;
      this.item = { product: '', price: '', quantity: '' };

      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
