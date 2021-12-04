import { Entity } from '../__shared__/entity'
import { PersonalInfoId } from './personal-info-id'
import { IPersonalInfoDomain } from './__interface__/personal-info-domain-interface'

export class PersonalInfo extends Entity<IPersonalInfoDomain, PersonalInfoId> {
  public static create (props: IPersonalInfoDomain): PersonalInfo {
    return new PersonalInfo(props, PersonalInfoId.create())
  }

  public static restore (
    props: IPersonalInfoDomain,
    id: PersonalInfoId
  ): PersonalInfo {
    return new PersonalInfo(props, id)
  }

  public get name (): IPersonalInfoDomain['name'] {
    return this.props.name
  }

  public get address (): IPersonalInfoDomain['address'] {
    return this.props.address
  }
}
