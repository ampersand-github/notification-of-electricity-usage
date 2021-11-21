import { MeterReader } from 'src/domain/meter-reader/meter-reader'

export class MeterReaderOutputDto {
  public readonly name: string;
  public constructor (meterReader: MeterReader) {
    this.name = meterReader.name
  }
}
