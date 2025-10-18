import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[app-row-item]',
  imports: [],
  templateUrl: './row-item.html',
  standalone: true,
})
export class RowItem {
  @Input() item!: Item;

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
