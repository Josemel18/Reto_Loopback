import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Producto} from './producto.model';

@model()
export class Venta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
    required: true,
  })
  medioPago: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @belongsTo(() => Producto)
  productoId: string;

  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;
