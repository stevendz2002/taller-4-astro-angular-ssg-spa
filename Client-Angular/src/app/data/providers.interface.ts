import { Provider } from "../interfaces/providers.interface";

/**
 * Listado de proveedores disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de proveedores, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Provider[]}
 */
export const PROVIDERS: Provider[] = [
  {
    id: 1,
    name: 'Distribuidora de Lácteos S.A.',
    contact: 'Juan Pérez',
    email: 'juan.perez@distribuidora.com',
    phone: '555-1234',
    category: 'Alimentos',
    price: 4500
  },
  {
    id: 2,
    name: 'Tecnología Avanzada S.A.',
    contact: 'María López',
    email: 'maria.lopez@tecnologia.com',
    phone: '555-5678',
    category: 'Tecnología',
    price: 12000
  },
  {
    id: 3,
    name: 'Servicios de Limpieza S.A.',
    contact: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@servicios.com',
    phone: '555-9012',
    category: 'Servicios',
    price: 8000
  },
  {
    id: 4,
    name: 'Logística Rápida S.A.',
    contact: 'Ana Martínez',
    email: 'ana.martinez@logistica.com',
    phone: '555-3456',
    category: 'Logística',
    price: 6000
  },
  {
    id: 5,
    name: 'Distribuidora de Verduras S.A.',
    contact: 'Luis González',
    email: 'luis.gonzalez@distribuidora.com',
    phone: '555-7890',
    category: 'Alimentos',
    price: 5000
  },
  {
    id: 6,
    name: 'Tecnología Móvil S.A.',
    contact: 'Carla Torres',
    email: 'carla.torres@tecnologia.com',
    phone: '555-2345',
    category: 'Tecnología',
    price: 15000
  },
  {
    id: 7,
    name: 'Mantenimiento General S.A.',
    contact: 'Pedro Sánchez',
    email: 'pedro.sanchez@servicios.com',
    phone: '555-8901',
    category: 'Servicios',
    price: 9000
  },
  {
    id: 8,
    name: 'Transportes Seguros S.A.',
    contact: 'Marta Ruiz',
    email: 'marta.ruiz@logistica.com',
    phone: '555-4567',
    category: 'Logística',
    price: 7000
  },
  {
    id: 9,
    name: 'Distribuidora de Frutas S.A.',
    contact: 'Jorge Díaz',
    email: 'jorge.diaz@distribuidora.com',
    phone: '555-0123',
    category: 'Alimentos',
    price: 5500
  },
  {
    id: 10,
    name: 'Computadores Rápidos S.A.',
    contact: 'Laura Castro',
    email: 'laura.castro@tecnologia.com',
    phone: '555-6789',
    category: 'Tecnología',
    price: 13000
  },
  {
    id: 11,
    name: 'Distribuidora de Carnes S.A.',
    contact: 'Andrés Ramírez',
    email: 'andres.ramirez@distribuidora.com',
    phone: '555-1122',
    category: 'Alimentos',
    price: 6500
  },
  {
    id: 12,
    name: 'Software Solutions S.A.',
    contact: 'Elena Morales',
    email: 'elena.morales@tecnologia.com',
    phone: '555-3344',
    category: 'Tecnología',
    price: 18000
  }
];