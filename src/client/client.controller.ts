import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clienteService: ClientService) {}
  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'Lista de clientes' });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `Cliente de id ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    console.log(body);
    return `Update cliente com id ${id}`;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return `Deletando cliente id ${id}`;
  }
}
