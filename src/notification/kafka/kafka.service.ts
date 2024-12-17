// kafka-consumer.service.ts
import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) {}

  async onModuleInit() {
    // Assinar o tópico Kafka que deseja consumir
    this.kafkaClient.subscribeToResponseOf('Teste');
    await this.kafkaClient.connect();
    console.log('Kafka Consumer conectado com sucesso!');

    // Escuta para mensagens recebidas
    this.kafkaClient.subscribeToResponseOf('Teste');
    this.kafkaClient.send('Teste', 'Request from consumer');
  }

  // Função para processar as mensagens recebidas
  consumeMessage(message: any) {
    console.log('Mensagem recebida do Kafka:', message);
    // Aqui você pode processar o conteúdo da mensagem conforme necessário
  }
}
