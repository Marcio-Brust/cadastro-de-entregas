import { Injectable } from '@nestjs/common';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  private client: Client[] = [
    {
      id: 1,
      Fornecedor: 'Shopee',
      data: '21/02/2024',
      descricao: 'Cliente pediu para entregar a vizinha',
    },
  ];

  findAll() {
    return this.client;
  }
  findOne(id: number) {
    return this.client.find((client) => client.id === id);
  }

  create(createClientDTO: any) {
    return this.client.push(createClientDTO);
  }

  update(id: number, updateClientDTO: any) {
    const existingClient = this.findOne(id);
    if (existingClient) {
      const index = this.client.findIndex((client) => client.id === id);
      this.client[index] = {
        id,
        ...updateClientDTO,
      };
    }
  }

  remove(id: number) {
    const index = this.client.findIndex((client) => client.id === id);
    if (index >= 0) {
      this.client.splice(index, 1);
    }
  }
}
