import { Component, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-view',
  imports: [],
  templateUrl: './company-view.html',
  styleUrl: './company-view.css',
  standalone: true
})
export class CompanyView {

  @Input() company!: Company;
}
