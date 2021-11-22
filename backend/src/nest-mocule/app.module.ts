import { Module } from '@nestjs/common'
import {NotificationOfElectricityUsageController} from "../presentation/controller/notification-of-electricity-usage.controller";

@Module({
  imports: [],
  controllers: [NotificationOfElectricityUsageController],
  providers: []
})
export class AppModule {}
