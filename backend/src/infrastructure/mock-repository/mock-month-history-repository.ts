import { CustomerId } from "src/domain/customer/customer-id";
import { Month } from "src/domain/month-history/month";
import { MonthHistory } from "src/domain/month-history/month-history";
import { MonthHistoryId } from "src/domain/month-history/month-history-id";
import { Year } from "src/domain/month-history/year";
import { IMonthHistoryRepository } from "src/domain/month-history/__interface__/month-history-repository-interface";
import { PrismaService } from "../prisma/prisma.service";

export class MockMonthHistoryRepository implements IMonthHistoryRepository {
  public constructor(readonly prismaService: PrismaService) {}
  findById(monthHistoryId: MonthHistoryId): Promise<MonthHistory | null> {
    return Promise.resolve(undefined);
  }

  findByDate(customerId: CustomerId, year: Year, month: Month): Promise<MonthHistory | null> {
    return Promise.resolve(undefined);
  }

  findLatest(customerId: CustomerId): Promise<MonthHistory | null> {
    return Promise.resolve(undefined);
  }
}
