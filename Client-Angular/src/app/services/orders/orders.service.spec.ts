import { TestBed } from '@angular/core/testing';
import { OrdersService } from './orders.service';
import { ORDERS } from '../../data/orders.interface';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersService);
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllOrders debería retornar un observable con las órdenes', (done) => {
      service.getAllOrders().subscribe((orders) => {
        expect(orders).toEqual(ORDERS);
        expect(orders.length).toBe(ORDERS.length);
        done();
      });
    });
  });
});
