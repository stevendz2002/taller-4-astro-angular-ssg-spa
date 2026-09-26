/**
 * Interfaz que representa un ticket de incidencia.
 *
 * Contiene la información básica necesaria para mostrar un ticket
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada ticket debe tener un `id` único, un `subject` descriptivo,
 * un `assigned_to` con el nombre del responsable, una `priority` válida,
 * un `status` actual y una `date` de creación.
 *
 * @example
 * ```ts
 * const ticket: Ticket = {
 *   id: 1,
 *   subject: 'Error al iniciar sesión',
 *   assigned_to: 'Carlos Ramírez',
 *   priority: 'Alta',
 *   status: 'Abierto',
 *   date: '2026-09-01'
 * };
 * ```
 */
export interface Ticket {

    /** Identificador único del ticket */
    id: number;

    /** Asunto o descripción breve de la incidencia */
    subject: string;

    /** Nombre del responsable asignado al ticket */
    assigned_to: string;

    /** Nivel de prioridad del ticket */
    priority: TicketPriority;

    /** Estado actual del ticket */
    status: TicketStatus;

    /** Fecha de creación del ticket en formato ISO (YYYY-MM-DD) */
    date: string;

}

/**
 * Tipo de prioridad de un ticket.
 *
 * @remarks
 * Este tipo restringe las prioridades a los valores predefinidos:
 * - `'Baja'`     → prioridad baja, sin urgencia
 * - `'Media'`    → prioridad moderada
 * - `'Alta'`     → requiere atención pronta
 * - `'Crítica'`  → bloquea operaciones, atención inmediata
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const prioridad: TicketPriority = 'Alta';
 * ```
 */
export type TicketPriority = 'Baja' | 'Media' | 'Alta' | 'Crítica';

/**
 * Tipo de estado de un ticket.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - `'Abierto'`      → recién creado, sin gestionar
 * - `'En Progreso'`  → en curso de resolución
 * - `'En Revisión'`  → pendiente de validación
 * - `'Resuelto'`     → solución aplicada
 * - `'Cerrado'`      → finalizado y archivado
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: TicketStatus = 'En Progreso';
 * ```
 */
export type TicketStatus = 'Abierto' | 'En Progreso' | 'En Revisión' | 'Resuelto' | 'Cerrado';

