import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';
import { ORDERS } from '../../data/orders.interface';

/**
 * Servicio encargado de la gestión de órdenes.
 *
 * Proporciona métodos para obtener información de órdenes
 * desde la fuente de datos local.
 *
 * @example
 * ```ts
 * constructor(private ordersService: OrdersService) {}
 *
 * this.ordersService.getAllOrders().subscribe(orders => {
 *   console.log(orders);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * Obtiene la lista de órdenes desde la data local.
   *
   * @returns Observable que emite un array de órdenes.
   *
   * @example
   * ```ts
   * this.ordersService.getAllOrders().subscribe(orders => {
   *   console.log(orders);
   * });
   * ```
   */
  getAllOrders(): Observable<Order[]> {
    return of(ORDERS);
  }
}
