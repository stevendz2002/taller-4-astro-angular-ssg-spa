import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Ticket, TicketPriority, TicketStatus } from '../../interfaces/tickets.interface';

/**
 * Componente de tabla de tickets de incidencias.
 *
 * Se utiliza para mostrar un listado de tickets en una tabla,
 * mostrando información como asunto, responsable asignado, prioridad,
 * estado y fecha, con badges visuales para prioridad y estado.
 *
 * @remarks
 * Este componente recibe los tickets desde un componente padre
 * a través del Input `tickets` y utiliza los mapeos `priorityMap`
 * y `statusMap` para asignar colores a los badges según el valor.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-tickets-table [tickets]="ticketsList"></app-tickets-table>
 * ```
 */
@Component({
  selector: 'app-tickets-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './tickets-table.component.html',
})
export class TicketsTableComponent {

  /**
   * Listado de tickets que se mostrarán en la tabla.
   * @type {Ticket[]}
   * @remarks
   * Este Input permite pasar un array de tickets desde un componente padre,
   * generalmente `TicketsPage`. Cada ticket debe cumplir la interfaz `Ticket`.
   */
  @Input() tickets: Ticket[] = [];

  /**
   * Mapeo de prioridades de tickets a tipos de Badge.
   * @type {Record<TicketPriority, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada prioridad:
   * - `'Baja'`    → 'secondary' (gris)
   * - `'Media'`   → 'warning'   (amarillo)
   * - `'Alta'`    → 'danger'    (rojo)
   * - `'Crítica'` → 'dark'      (negro)
   *
   * Permite que en la tabla cada ticket tenga un badge visual que indique
   * la urgencia de la incidencia de forma clara para el usuario.
   */
  priorityMap: Record<TicketPriority, BadgeType> = {
    'Baja':    'secondary',
    'Media':   'warning',
    'Alta':    'danger',
    'Crítica': 'dark',
  };

  /**
   * Mapeo de estados de tickets a tipos de Badge.
   * @type {Record<TicketStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - `'Abierto'`     → 'primary'   (azul)
   * - `'En Progreso'` → 'warning'   (amarillo)
   * - `'En Revisión'` → 'info'      (celeste)
   * - `'Resuelto'`    → 'success'   (verde)
   * - `'Cerrado'`     → 'secondary' (gris)
   *
   * Permite identificar visualmente el ciclo de vida de cada ticket.
   */
  statusMap: Record<TicketStatus, BadgeType> = {
    'Abierto':     'primary',
    'En Progreso': 'warning',
    'En Revisión': 'info',
    'Resuelto':    'success',
    'Cerrado':     'secondary',
  };

}
