import { Ticket } from '../interfaces/tickets.interface';

export const TICKETS_MOCK: Ticket[] = [
    {
        id: 1,
        subject: 'Error al iniciar sesión en el portal',
        assigned_to: 'Carlos Ramírez',
        priority: 'Alta',
        status: 'Abierto',
        date: '2026-09-01',
    },
    {
        id: 2,
        subject: 'Página de productos no carga imágenes',
        assigned_to: 'María López',
        priority: 'Media',
        status: 'En Progreso',
        date: '2026-09-02',
    },
];
