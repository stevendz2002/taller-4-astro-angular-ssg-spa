export interface Ticket {

    id:          number;
    subject:     string;
    assigned_to: string;
    priority:    TicketPriority;
    status:      TicketStatus;
    date:        string;

}

export type TicketPriority = 'Baja' | 'Media' | 'Alta' | 'Crítica';

export type TicketStatus = 'Abierto' | 'En Progreso' | 'En Revisión' | 'Resuelto' | 'Cerrado';
