import { AggregateRoot } from '../__shared__/aggregate-root'
import { AreaId } from './area-id'
import { IAreaDomain } from './__interface__/area-domain-interface'

export class Area extends AggregateRoot<IAreaDomain, AreaId> {
  public static create (props: IAreaDomain): Area {
    Area.validateOfCode(props.code)
    return new Area(props, AreaId.create())
  }

  public static restore (props: IAreaDomain, id: AreaId): Area {
    Area.validateOfCode(props.code)
    return new Area(props, id)
  }

  public get code (): IAreaDomain['code'] {
    return this.props.code
  }

  public get name (): IAreaDomain['name'] {
    return this.props.name
  }

  // todo 値オブジェクトに委譲したい
  private static validateOfCode (props: IAreaDomain['code']) {
    if (String(props).length > 2) {
      throw new Error('電力会社コードは2桁の値で指定してください')
    }
  }
}
