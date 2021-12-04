import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class PersonalInfoId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'PersonalInfoId')
  }

  public static create (): PersonalInfoId {
    return new PersonalInfoId(uuid())
  }

  public static restore (id: string): PersonalInfoId {
    return new PersonalInfoId(id)
  }
}
