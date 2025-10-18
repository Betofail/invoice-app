import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceView } from '../invoice-view/invoice-view';
import { CompanyView } from '../company-view/company-view';
import { ClientView } from '../client-view/client-view';
import { ListItems } from '../list-items/list-items';
import { Total } from '../total/total';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceView, CompanyView, ClientView, ListItems, Total],
  templateUrl: './invoice.html',
  standalone: true,
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: number): void {
    this.invoice = this.service.remove(id);
  }
}
