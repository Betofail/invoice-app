import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-view',
  imports: [],
  templateUrl: './client-view.html',
  styleUrl: './client-view.css',
  standalone: true
})
export class ClientView {

  @Input() client!: Client;

}
