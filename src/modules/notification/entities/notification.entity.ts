import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber } from 'class-validator';

@Entity({ name: 'notification' })
export class NotificationEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  isAll: boolean;

  @Column()
  userId: number;
}
