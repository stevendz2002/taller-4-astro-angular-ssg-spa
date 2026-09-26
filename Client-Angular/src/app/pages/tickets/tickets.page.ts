import { Component, inject } from '@angular/core';
import { TicketsTableComponent } from '../../components/tickets-table/tickets-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Ticket } from '../../interfaces/tickets.interface';
import { State } from '../../interfaces/state.interface';
import { TicketsService } from '../../services/tickets/tickets.service';

/**
 * Componente contenedor de tickets de incidencias.
 *
 * Se utiliza para gestionar y mostrar un listado de tickets
 * utilizando el componente `TicketsTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `TicketsService`
 * para obtener los tickets y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-tickets',
  imports: [TicketsTableComponent, AlertComponent],
  templateUrl: './tickets.page.html',
})
export class TicketsPage {

  /**
   * Listado de tickets obtenidos desde el servicio.
   * @type {Ticket[]}
   */
  tickets: Ticket[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener tickets de incidencias.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private ticketsService = inject(TicketsService);

  /**
   * Inicializa el componente y carga los tickets.
   * @remarks
   * Se suscribe al método `getAllTickets()` del servicio y
   * asigna los datos recibidos a la propiedad `tickets`.
   */
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
