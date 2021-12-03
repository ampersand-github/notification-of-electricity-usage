import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class ContactInfoId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'ContactInfoId')
  }

  public static create (): ContactInfoId {
    return new ContactInfoId(uuid())
  }

  public static restore (id: string): ContactInfoId {
    return new ContactInfoId(id)
  }
}
