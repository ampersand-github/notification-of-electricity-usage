export interface IMonthHistoryDomain {
  year:number
  month:number
  price:number
  meter:number
  readingDate:Date
  start:Date
  end:Date
  // todo 検針員忘れている
}
