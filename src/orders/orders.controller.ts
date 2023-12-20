import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear odenes',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'orden actualizada',
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'orden Borrada',
      body: {
        id: id,
      },
    };
  }
}
