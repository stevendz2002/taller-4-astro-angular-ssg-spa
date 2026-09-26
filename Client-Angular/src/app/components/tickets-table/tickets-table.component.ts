import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Ticket, TicketPriority, TicketStatus } from '../../interfaces/tickets.interface';

@Component({
  selector: 'app-tickets-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './tickets-table.component.html',
})
export class TicketsTableComponent {

  @Input() tickets: Ticket[] = [];

  priorityMap: Record<TicketPriority, BadgeType> = {
    'Baja':    'secondary',
    'Media':   'warning',
    'Alta':    'danger',
    'Crítica': 'dark',
  };

  statusMap: Record<TicketStatus, BadgeType> = {
    'Abierto':     'primary',
    'En Progreso': 'warning',
    'En Revisión': 'info',
    'Resuelto':    'success',
    'Cerrado':     'secondary',
  };

}
