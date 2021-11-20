import { Module } from '@nestjs/common'
import { AppController } from '../presentation/controller/app.controller'

@Module({
  imports: [],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
