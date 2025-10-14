import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  imports: [],
  templateUrl: './invoice-view.html',
  styleUrl: './invoice-view.css',
  standalone: true
})
export class InvoiceView {

  @Input() id!: number;
  @Input() name!: string;

}
