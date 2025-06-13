import { Subcategoria } from './ISubCategoria';

export interface Categoria {
  id: number;
  denominacion: string;
  esInsumo: boolean;
  subcategorias: Subcategoria[];
  sucursals: any[];
}