import { Detalle } from './IDetalle';

export interface Producto {
  id: number;
  denominacion: string;
  categoriaId: number;
  categoria: {
    id: number;
    denominacion: string;
  };
  imagenes: string[];
  precioVenta: number;
  descripcion: string;
  tiempoEstimadoMinutos: number;
  preparacion: string;
  detalles: Detalle[];
}
