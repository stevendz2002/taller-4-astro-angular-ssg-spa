import { TestBed } from '@angular/core/testing';
import { TicketsService } from './tickets.service';
import { TICKETS } from '../../data/tickets.data';

describe('TicketsService', () => {
  let service: TicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsService);
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar todos los tickets', (done) => {
    service.getAllTickets().subscribe((tickets) => {
      expect(tickets).toEqual(TICKETS);
      done();
    });
  });

  it('debería retornar un Observable con la cantidad correcta de tickets', (done) => {
    service.getAllTickets().subscribe((tickets) => {
      expect(tickets.length).toBe(TICKETS.length);
      done();
    });
  });
});
