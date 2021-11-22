import { AggregateRoot } from '../__shared__/aggregate-root'
import { ISupplyPointSpecificNumberDomain } from './__interface__/supply-point-specific-number-domain-interface'
import { SupplyPointSpecificNumberId } from './supply-point-specific-number-id'
import { OthersNumber } from './others-number'

export class SupplyPointSpecificNumber extends AggregateRoot<
  ISupplyPointSpecificNumberDomain,
  SupplyPointSpecificNumberId
> {
  public static create (
    props: ISupplyPointSpecificNumberDomain
  ): SupplyPointSpecificNumber {
    return new SupplyPointSpecificNumber(
      props,
      SupplyPointSpecificNumberId.create()
    )
  }

  public static restore (
    props: ISupplyPointSpecificNumberDomain,
    id: SupplyPointSpecificNumberId
  ): SupplyPointSpecificNumber {
    return new SupplyPointSpecificNumber(props, id)
  }

  public get address (): ISupplyPointSpecificNumberDomain['address'] {
    return this.props.address
  }

  public get areaId (): ISupplyPointSpecificNumberDomain['areaId'] {
    return this.props.areaId
  }

  public get othersNumber (): OthersNumber["othersNumber"] {
    return this.props.othersNumber.othersNumber
  }
}
