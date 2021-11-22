import {Controller, Get, HttpException, HttpStatus, UseGuards} from '@nestjs/common'
import { Customer } from 'src/domain/customer/customer'
import { CustomerId } from 'src/domain/customer/customer-id'
import {AuthGuard} from "../decorator/guards/auth.guard";
import {PrismaService} from "../../infrastructure/prisma/prisma.service";
import {CustomerRepository} from "../../infrastructure/mock-repository/customer-repository";
import {MonthHistoryRepository} from "../../infrastructure/mock-repository/month-history-repository";
import {CustomerFindByIdUsecase} from "../../usecase/cusotmer/customer-find-by-id-usecase";
import {MonthHistoryFindByIdUsecase} from "../../usecase/month-history/month-history-find-by-id-usecase";
import {CustomerOutputDto} from "../../usecase/cusotmer/__dto__/customer-output-dto";
import {MonthHistoryOutputDto} from "../../usecase/month-history/__dto__/month-history-output-dto";

@UseGuards(AuthGuard)
@Controller("notification-of-electricity-usage")
export class NotificationOfElectricityUsageController {
  prismaService = new PrismaService();
  customerRepository = new CustomerRepository(this.prismaService);
  monthHistoryRepository = new MonthHistoryRepository(this.prismaService);

  @Get('latest')
  async getLatest(): Promise<{ customer: string, thisHistory: string, lastHistory: string }> {
    try {
      const id = "" // uid
      const customerFindByIdUsecase = new CustomerFindByIdUsecase(this.customerRepository)
      const monthHistoryFindByIdUsecase = new MonthHistoryFindByIdUsecase(this.monthHistoryRepository)
      const customerOutputDto: CustomerOutputDto = await customerFindByIdUsecase.do(id)
      const monthHistoryOutputDto: MonthHistoryOutputDto = await monthHistoryFindByIdUsecase.do(id)

      const thisMonthHistoryDTO = '' // idをhistoryのユースケースに渡して返却された値
      const lastMonthHistoryDTO = '' // idをhistoryのユースケースに渡して返却された値
      // CQRSで特定地点番号　customerのidと供給地点特定番号から取得　これはなんだ？CQRS？ドメインサービス？ -> customerのドメインサービスかも
      // const 検針員名
      // const 計器番号

      // これらの汎用DTOをまとめて電気料金使用のお知らせ専用DTOをつくる

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
