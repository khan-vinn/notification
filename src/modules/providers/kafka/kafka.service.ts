import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject('KAFKA_INSTANCE') private readonly client: ClientKafka) {}
  async onModuleInit() {
    [''].forEach((topic) => {
      this.client.subscribeToResponseOf(topic);
    });
    await this.client.connect();
  }
  async onModuleDestroy() {
    await this.client.close();
  }

  send(topic: string, message: any) {
    return this.client.send(topic, message);
  }
}
