import { MeterReader } from 'src/domain/meter-reader/meter-reader'
import { MeterReaderId } from 'src/domain/meter-reader/meter-reader-id'
import { IMeterReaderRepository } from 'src/domain/meter-reader/__interface__/meter-reader-repository-interface'
import { MeterReaderOutputDto } from './__dto__/meter-reader-output-dto'

export class MeterReaderFindByIdUsecase {
  public constructor (readonly repository: IMeterReaderRepository) {}

  public async do (id: string): Promise<MeterReaderOutputDto> {
    const meterReader: MeterReader = await this.repository.findById(
      MeterReaderId.restore(id)
    )
    return new MeterReaderOutputDto(meterReader)
  }
}
