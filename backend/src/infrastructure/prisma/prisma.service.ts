import { PrismaClient } from '@prisma/client'
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'

// https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit () {
    await this.$connect()
  }

  async enableShutdownHooks (app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
