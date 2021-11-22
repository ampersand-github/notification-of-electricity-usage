import { PrismaService } from '../prisma/prisma.service'
import { MeterReaderId } from 'src/domain/meter-reader/meter-reader-id'
import { MeterReader } from 'src/domain/meter-reader/meter-reader'
import { IMeterReaderRepository } from 'src/domain/meter-reader/__interface__/meter-reader-repository-interface';

export class MockMeterReaderRepository implements IMeterReaderRepository {
  public constructor (readonly prismaService: PrismaService) {}

  findById(meterReaderId: MeterReaderId): Promise<MeterReader | null> {
    return Promise.resolve(undefined);
  }
}
