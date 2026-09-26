import type { Order } from "@interfaces/Orders";

/**
 * Listado de órdenes de compra del sistema.
 *
 * Esta constante simula una fuente de datos estática para la generación
 * SSG (Static Site Generation) en Astro.
 *
 * @type {Order[]}
 */
export const ORDERS: Order[] = [
  {
    id: 1,
    userId: 'usr-001',
    userName: 'Carlos Ramírez',
    items: [
      { productId: 'prod-001', productName: 'Leche entera', quantity: 2, unitPrice: 4500 },
      { productId: 'prod-005', productName: 'Manzanas rojas', quantity: 1, unitPrice: 5200 },
    ],
    totalAmount: 14200,
    status: 'COMPLETED',
    createdAt: '2026-09-20T10:30:00.000Z',
  },
  {
    id: 2,
    userId: 'usr-002',
    userName: 'Ana Gómez',
    items: [
      { productId: 'prod-003', productName: 'Pechuga de pollo', quantity: 2, unitPrice: 14500 },
      { productId: 'prod-007', productName: 'Tomate chonto', quantity: 3, unitPrice: 3500 },
    ],
    totalAmount: 39500,
    status: 'PROCESSING',
    createdAt: '2026-09-22T14:15:00.000Z',
  },
  {
    id: 3,
    userId: 'usr-003',
    userName: 'Luis Martínez',
    items: [
      { productId: 'prod-004', productName: 'Carne molida de res', quantity: 1, unitPrice: 12800 },
      { productId: 'prod-008', productName: 'Cebolla cabezona', quantity: 2, unitPrice: 3000 },
    ],
    totalAmount: 18800,
    status: 'PENDING',
    createdAt: '2026-09-23T09:00:00.000Z',
  },
  {
    id: 4,
    userId: 'usr-004',
    userName: 'María Lopez',
    items: [
      { productId: 'prod-002', productName: 'Queso campesino', quantity: 1, unitPrice: 8200 },
      { productId: 'prod-009', productName: 'Yogurt natural', quantity: 4, unitPrice: 2500 },
    ],
    totalAmount: 18200,
    status: 'COMPLETED',
    createdAt: '2026-09-24T16:45:00.000Z',
  },
  {
    id: 5,
    userId: 'usr-005',
    userName: 'Jorge Fernández',
    items: [
      { productId: 'prod-010', productName: 'Pernil de cerdo', quantity: 1, unitPrice: 16000 },
    ],
    totalAmount: 16000,
    status: 'CANCELLED',
    createdAt: '2026-09-25T11:20:00.000Z',
  },
  {
    id: 6,
    userId: 'usr-006',
    userName: 'Paola Ríos',
    items: [
      { productId: 'prod-006', productName: 'Banano', quantity: 3, unitPrice: 2800 },
      { productId: 'prod-009', productName: 'Yogurt natural', quantity: 2, unitPrice: 2500 },
    ],
    totalAmount: 13400,
    status: 'COMPLETED',
    createdAt: '2026-09-25T18:00:00.000Z',
  },
];
