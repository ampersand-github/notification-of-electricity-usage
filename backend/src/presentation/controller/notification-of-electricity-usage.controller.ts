import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common'
import { PrismaService } from 'src/infrastructure/prisma/prisma.service'
import { AuthGuard } from '../decorator/guards/auth.guard'
import { CustomerFindByIdUsecase } from 'src/usecase/cusotmer/customer-find-by-id-usecase'
import { MockMonthHistoryRepository } from 'src/infrastructure/mock-repository/mock-month-history-repository'
import { MockInstrumentRepository } from 'src/infrastructure/mock-repository/mock-Instrument-repository'
import { FindLatestUsecase } from 'src/usecase/month-history/find-latest-usecase'
import { InstrumentFindByIdUsecase } from 'src/usecase/instrument/instrument-find-by-id-usecase'
import { MockCustomerRepository } from 'src/infrastructure/mock-repository/mock-customer-repository'
import {MeterReaderFindByIdUsecase} from "../../usecase/meter-reader/meter-reader-find-by-id-usecase";
import {MockMeterReaderRepository} from "../../infrastructure/mock-repository/mock-meter-reader-repository";

@UseGuards(AuthGuard)
@Controller('notification-of-electricity-usage')
export class NotificationOfElectricityUsageController {
  prismaService = new PrismaService();
  customerRepository = new MockCustomerRepository(this.prismaService);
  monthHistoryRepository = new MockMonthHistoryRepository(this.prismaService);
  instrumentRepository = new MockInstrumentRepository(this.prismaService);
  meterReaderRepository = new MockMeterReaderRepository(this.prismaService);

  @Get('latest')
  async getLatest (): Promise<{
    customer: string;
    thisHistory: string;
    lastHistory: string;
  }> {
    try {
      const id = '' // uid
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      const customerFindByIdUsecase = new CustomerFindByIdUsecase(this.customerRepository)
      const findLatestUsecase = new FindLatestUsecase(this.monthHistoryRepository)
      const instrumentFindByIdUsecase = new InstrumentFindByIdUsecase(this.instrumentRepository)
      const meterReaderFindByIdUsecase = new MeterReaderFindByIdUsecase(this.meterReaderRepository)
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      const customerOutputDto = await customerFindByIdUsecase.do(id)
      const monthHistoryOutputDto = await findLatestUsecase.do(id)
      const instrumentOutputDto = await instrumentFindByIdUsecase.do(customerOutputDto.instrumentId)
      const meterReaderOutputDto = await meterReaderFindByIdUsecase.do(monthHistoryOutputDto.meterReaderId)
      // CQRSで特定地点番号　customerのidと供給地点特定番号から取得　これはなんだ？CQRS？ドメインサービス？ -> customerのドメインサービスかも
      const latestResponseDto = ""  // これらの汎用DTOをまとめて電気料金使用のお知らせ専用DTOをつくる
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return {
      customer: '',
      thisHistory: '',
      lastHistory: ''
    }
  }
}
