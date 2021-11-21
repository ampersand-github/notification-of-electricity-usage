import { AggregateRoot } from '../__shared__/aggregate-root'
import { ISupplyPointSpecificNumberDomain } from './__interface__/supply-point-specific-number-domain-interface'
import { SupplyPointSpecificNumberId } from './supply-point-specific-number-id'

export class SupplyPointSpecificNumber extends AggregateRoot<
  ISupplyPointSpecificNumberDomain,
  SupplyPointSpecificNumberId
> {
  public static create (
    props: ISupplyPointSpecificNumberDomain
  ): SupplyPointSpecificNumber {
    SupplyPointSpecificNumber.validateOfOthersNumber(props.othersNumber)
    return new SupplyPointSpecificNumber(
      props,
      SupplyPointSpecificNumberId.create()
    )
  }

  public static restore (
    props: ISupplyPointSpecificNumberDomain,
    id: SupplyPointSpecificNumberId
  ): SupplyPointSpecificNumber {
    SupplyPointSpecificNumber.validateOfOthersNumber(props.othersNumber)
    return new SupplyPointSpecificNumber(props, id)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public get address (): ISupplyPointSpecificNumberDomain['address'] {
    return this.props.address
  }

  public get areaId (): ISupplyPointSpecificNumberDomain['areaId'] {
    return this.props.areaId
  }

  public get othersNumber (): ISupplyPointSpecificNumberDomain['othersNumber'] {
    return this.props.othersNumber
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private static validateOfOthersNumber (props: ISupplyPointSpecificNumberDomain['othersNumber']) {
    if (String(props).length > 16) {
      throw new Error('供給地点特定番号の後半は16桁の値で指定してください')
    }
  }
}
