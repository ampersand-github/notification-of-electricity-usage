import { IMonthHistoryDomain } from "../__interface__/month-history-domain-interface";
import { MonthHistory } from "../month-month-history";
import { MonthHistoryId } from "../month-history-id";
import { CustomerId } from "src/domain/customer/customer-id";
import { Year } from "../year";
import { Month } from "../month";
import { ReadingDate } from "../reading-date";

describe("MonthHistory", () => {
  const historyProps: IMonthHistoryDomain = {
    customerId: CustomerId.create(),
    year: Year.create({ year: 2021 }),
    month: Month.create({ month: 11 }),
    price: 1000,
    meter: 1000,
    readingDate: ReadingDate.create({readingDate: new Date("2021-11-22T09:00:00")}),
    start: new Date("2021-11-22T09:00:00"),
    end: new Date("2021-11-19T09:00:00"),
  };

  it("createできる", () => {
    expect(MonthHistory.create(historyProps)).toEqual(expect.any(MonthHistory));
  });

  it("restoreできる", () => {
    const historyId: MonthHistoryId = MonthHistoryId.restore("test-id");
    expect(MonthHistory.restore(historyProps, historyId)).toEqual(
      expect.any(MonthHistory)
    );
    expect(
      MonthHistory.restore(historyProps, historyId).id.equals(historyId)
    ).toBe(true);
  });

});
