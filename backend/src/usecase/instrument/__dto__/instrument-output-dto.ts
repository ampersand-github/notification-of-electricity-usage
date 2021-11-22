import { Instrument } from 'src/domain/instrument/instrument'

export class InstrumentOutputDto {
  public readonly name: string;
  public readonly number: number;
  public constructor (instrument: Instrument) {
    this.name = instrument.name
    this.number = instrument.number
  }
}
