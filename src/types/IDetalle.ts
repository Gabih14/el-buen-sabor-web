import { UnidadMedida} from './IUnidadMedida.ts';

export interface Detalle {
  tipo: string;
  cantidad: number;
  item: UnidadMedida;
}