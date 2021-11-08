import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Venta,
  Producto,
} from '../models';
import {VentaRepository} from '../repositories';

export class VentaProductoController {
  constructor(
    @repository(VentaRepository)
    public ventaRepository: VentaRepository,
  ) { }

  @get('/ventas/{id}/producto', {
    responses: {
      '200': {
        description: 'Producto belonging to Venta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Producto)},
          },
        },
      },
    },
  })
  async getProducto(
    @param.path.string('id') id: typeof Venta.prototype.id,
  ): Promise<Producto> {
    return this.ventaRepository.producto(id);
  }
}
