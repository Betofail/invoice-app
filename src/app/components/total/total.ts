import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.html',
  styleUrl: './total.css',
  standalone: true,
})
export class Total {
  @Input() total!: number;
}
