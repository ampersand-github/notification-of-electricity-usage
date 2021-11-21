import { MonthHistory } from "src/domain/month-history/month-month-history";

export class MonthHistoryOutputDto {
  public readonly year: number;
  public readonly month: number;
  public readonly price: number;
  public readonly meter: number;
  public readonly readingDate: Date;
  public readonly start: Date;
  public readonly end: Date;
  public constructor (history: MonthHistory) {
    this.year = history.year
    this.month = history.month
    this.price = history.price
    this.meter = history.meter
    this.readingDate = history.readingDate
    this.start = history.start
    this.end = history.end
  }
}
