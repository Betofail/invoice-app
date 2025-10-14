import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-list-items',
  imports: [],
  templateUrl: './list-items.html',
  styleUrl: './list-items.css',
  standalone: true
})
export class ListItems {

  @Input() items!: Item[];
}
