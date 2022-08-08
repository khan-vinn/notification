import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntity } from './entities/notification.entity';
import { Repository } from 'typeorm';
import { NotificationDeliveryEntity } from './entities/notification.delivery.entity';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { CreateNotificationDeliveryDto } from './dto/createNotificationDelivery.dto';
import { UpdateNotificationDeliveryDto } from './dto/updateNotificationDelivery.dto';

@Injectable({})
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationsRepository: Repository<NotificationEntity>,
    @InjectRepository(NotificationDeliveryEntity)
    private readonly notificationDeliveryRepository: Repository<NotificationDeliveryEntity>,
  ) {}

  getNotification(id: number) {
    return this.notificationsRepository.findOneBy({ id });
  }

  getNotificationDelivery(id: number) {
    return this.notificationDeliveryRepository.findOneBy({ id });
  }

  createNotification(notification: CreateNotificationDto) {
    this.notificationsRepository.create(notification);
  }

  createDeliveryNotification(notification: CreateNotificationDeliveryDto) {
    this.notificationDeliveryRepository.create(notification);
  }

  async updateDeliveryNotification(
    notification: UpdateNotificationDeliveryDto,
  ) {
    const notificationDelivery = await this.getNotificationDelivery(
      notification.id,
    );
    if (!!!notificationDelivery) {
      throw new HttpException('notification not found', HttpStatus.BAD_REQUEST);
    }
    Object.assign(notificationDelivery, notification);
    await this.notificationDeliveryRepository.save(notificationDelivery);
  }
}
