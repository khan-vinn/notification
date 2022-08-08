import { MaxLength, MinLength } from 'class-validator';

export class CreateNotificationDto {
  @MaxLength(150)
  @MinLength(1)
  meessage: string;
  userID: number;
  isAll: boolean;
}
