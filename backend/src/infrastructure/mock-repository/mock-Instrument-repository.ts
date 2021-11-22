import { Instrument } from 'src/domain/instrument/instrument'
import { InstrumentId } from 'src/domain/instrument/instrument-id'
import { IInstrumentRepository } from 'src/domain/instrument/__interface__/instrument-repository-interface'
import { PrismaService } from '../prisma/prisma.service'

export class MockInstrumentRepository implements IInstrumentRepository {
  public constructor (readonly prismaService: PrismaService) {}

  findById (instrumentId: InstrumentId): Promise<Instrument | null> {
    return Promise.resolve(undefined)
  }
}
