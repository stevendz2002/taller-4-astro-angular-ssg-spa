import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../../interfaces/tickets.interface';
import { TICKETS } from '../../data/tickets.data';

/**
 * Servicio encargado de la gestión de tickets de incidencias.
 *
 * Proporciona métodos para obtener información de tickets
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private ticketsService: TicketsService) {}
 *
 * this.ticketsService.getAllTickets().subscribe(tickets => {
 *   console.log(tickets);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class TicketsService {

  /**
   * Obtiene la lista completa de tickets de incidencias.
   *
   * @returns Observable que emite un array de tickets.
   *
   * @example
   * ```ts
   * this.ticketsService.getAllTickets().subscribe(tickets => {
   *   console.log(tickets);
   * });
   * ```
   */
  getAllTickets(): Observable<Ticket[]> {
    return of(TICKETS);
  }

}
