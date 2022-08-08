import { NotificationService } from './notification.service';
import { Controller } from '@nestjs/common';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
}
