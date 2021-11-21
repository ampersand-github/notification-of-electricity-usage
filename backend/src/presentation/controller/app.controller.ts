import { Controller, Get } from '@nestjs/common'
import { Customer } from 'src/domain/customer/customer'
import { CustomerId } from 'src/domain/customer/customer-id'

@Controller()
export class AppController {
  @Get()
  getHello (): string {
    return 'Hello World!'
  }
  // todo イメージ
    //@UserGuard() // firebase authでガード
  @Get("use")
  // outはこれでいい？
  fetchData (): { customer: string ,thisHistory:string,lastHistory:string} {
    console.log("認証")
    const customerId = ""
   const customerDTO = "" // idをcustomerのユースケースに渡して返却された値
    const thisMonthHistoryDTO = "" // idをhistoryのユースケースに渡して返却された値
    const lastMonthHistoryDTO = "" // idをhistoryのユースケースに渡して返却された値
      // CQRSで特定地点番号　customerのidと供給地点特定番号から取得　これはなんだ？CQRS？ドメインサービス？ -> customerのドメインサービスかも
      // const 検針員名
      // const 計器番号

      // これらの汎用DTOをまとめて電気料金使用のお知らせ専用DTOをつくる

    return {
        customer:"",
        thisHistory:"",
        lastHistory:""
    }
  }
}

