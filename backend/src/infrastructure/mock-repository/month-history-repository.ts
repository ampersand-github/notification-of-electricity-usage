import { MonthHistory } from 'src/domain/month-history/month-history';
import { MonthHistoryId } from 'src/domain/month-history/month-history-id'
import { IMonthHistoryRepository } from 'src/domain/month-history/__interface__/month-history-repository-interface'
import { PrismaService } from '../prisma/prisma.service'

/* eslint-disable */
export class MonthHistoryRepository implements IMonthHistoryRepository {
  public constructor(readonly prismaService: PrismaService) {}
  findById(monthHistoryId: MonthHistoryId): Promise<MonthHistory | null> {
    return Promise.resolve(undefined);
  }
}
