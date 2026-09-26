import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../../interfaces/tickets.interface';
import { TICKETS } from '../../data/tickets.data';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {

  getAllTickets(): Observable<Ticket[]> {
    return of(TICKETS);
  }

}
