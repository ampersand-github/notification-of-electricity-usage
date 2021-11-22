import { AggregateRoot } from '../__shared__/aggregate-root'
import { InstrumentId } from './instrument-id'
import { IInstrumentDomain } from './__interface__/instrument-domain-interface'

export class Instrument extends AggregateRoot<IInstrumentDomain, InstrumentId> {
  public static create (props: IInstrumentDomain): Instrument {
    return new Instrument(props, InstrumentId.create())
  }

  public static restore (
    props: IInstrumentDomain,
    id: InstrumentId
  ): Instrument {
    return new Instrument(props, id)
  }

  public get name (): IInstrumentDomain['name'] {
    return this.props.name
  }

  public get number (): IInstrumentDomain['number'] {
    return this.props.number
  }
}
