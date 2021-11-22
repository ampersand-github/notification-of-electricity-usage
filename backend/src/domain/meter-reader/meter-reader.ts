import { AggregateRoot } from '../__shared__/aggregate-root'
import { MeterReaderId } from './meter-reader-id'
import { IMeterReaderDomain } from './__interface__/meter-reader-domain-interface'

export class MeterReader extends AggregateRoot<
  IMeterReaderDomain,
  MeterReaderId
> {
  public static create (props: IMeterReaderDomain): MeterReader {
    return new MeterReader(props, MeterReaderId.create())
  }

  public static restore (
    props: IMeterReaderDomain,
    id: MeterReaderId
  ): MeterReader {
    return new MeterReader(props, id)
  }

  public get name (): IMeterReaderDomain['name'] {
    return this.props.name
  }
}
