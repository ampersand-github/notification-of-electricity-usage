import { Instrument } from 'src/domain/Instrument/Instrument'
import { InstrumentId } from 'src/domain/Instrument/Instrument-id'
import { IInstrumentRepository } from 'src/domain/Instrument/__interface__/Instrument-repository-interface'
import { InstrumentOutputDto } from './__dto__/instrument-output-dto'

export class InstrumentFindByIdUsecase {
  public constructor (readonly repository: IInstrumentRepository) {}

  public async do (id: string): Promise<InstrumentOutputDto> {
    const instrument: Instrument = await this.repository.findById(
      InstrumentId.restore(id)
    )
    return new InstrumentOutputDto(instrument)
  }
}
