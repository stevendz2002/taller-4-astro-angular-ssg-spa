import { Component, inject } from '@angular/core';
import { TicketsTableComponent } from '../../components/tickets-table/tickets-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Ticket } from '../../interfaces/tickets.interface';
import { State } from '../../interfaces/state.interface';
import { TicketsService } from '../../services/tickets/tickets.service';

@Component({
  selector: 'app-tickets',
  imports: [TicketsTableComponent, AlertComponent],
  templateUrl: './tickets.page.html',
})
export class TicketsPage {

  tickets: Ticket[] = [];

  state: State = 'init';

  private ticketsService = inject(TicketsService);

  ngOnInit(): void {
    this.state = 'loading';
    this.ticketsService.getAllTickets().subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
