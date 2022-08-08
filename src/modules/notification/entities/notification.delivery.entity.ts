import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber } from 'class-validator';
import { NotificationEntity } from './notification.entity';

@Entity({ name: 'notification_delivery' })
export class NotificationDeliveryEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @OneToMany(() => NotificationEntity, (notification) => notification.userId)
  notification: NotificationEntity;

  @Column()
  delivered: boolean;
}
