import { AggregateRoot } from '../__shared__/aggregate-root'
import { VoltageId } from './voltage-id'
import { IVoltageDomain } from './__interface__/voltage-domain-interface'

export class Voltage extends AggregateRoot<
  IVoltageDomain,
  VoltageId
> {
  public static create (props: IVoltageDomain): Voltage {
    return new Voltage(props, VoltageId.create())
  }

  public static restore (
    props: IVoltageDomain,
    id: VoltageId
  ): Voltage {
    return new Voltage(props, id)
  }

  public get name (): IVoltageDomain['name'] {
    return this.props.name
  }
}
