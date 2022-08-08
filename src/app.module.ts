import { Module } from '@nestjs/common';
import { PostgresModule } from './modules/providers/postgres/postgres.module';
import { NotificationModule } from './modules/notification/notification.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'],
      validationSchema: Joi.object({
        KAFKA_BROKER: Joi.string().required(),
        KAFKA_GROUP_ID: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        // REDIS_HOST: Joi.string().required(),
        // REDIS_PORT: Joi.number().required(),
        // REDIS_PASSWORD: Joi.string().required(),
      }),
    }),
    PostgresModule,
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
