import { AggregateRoot } from '../__shared__/aggregate-root'
import { AreaId } from './area-id'
import { IAreaDomain } from './__interface__/area-domain-interface'
import { ICodeDomain } from './__interface__/code-domain-interface'

export class Area extends AggregateRoot<IAreaDomain, AreaId> {
  public static create (props: IAreaDomain): Area {
    return new Area(props, AreaId.create())
  }

  public static restore (props: IAreaDomain, id: AreaId): Area {
    return new Area(props, id)
  }

  public get code (): ICodeDomain['code'] {
    return this.props.code.code
  }

  public get name (): IAreaDomain['name'] {
    return this.props.name
  }
}
