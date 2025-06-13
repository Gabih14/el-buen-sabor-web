export interface Subcategoria {
  id: number;
  denominacion: string;
  esInsumo: boolean;
  subcategorias: Subcategoria[];
  sucursals: any[];
}