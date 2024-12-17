import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'my-consumer',
            brokers: ['localhost:29092'], // Endereço do broker Kafka
          },
          consumer: {
            groupId: 'my-consumer-group', // Nome do grupo de consumidores
          },
        },
      },
    ]),
  ],
  providers: [KafkaConsumerService],
  exports: [KafkaConsumerService],
})
export class KafkaModule {}
