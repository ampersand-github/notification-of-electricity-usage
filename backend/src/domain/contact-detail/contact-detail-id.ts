import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class ContactDetailId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'ContactDetailId')
  }

  public static create (): ContactDetailId {
    return new ContactDetailId(uuid())
  }

  public static restore (id: string): ContactDetailId {
    return new ContactDetailId(id)
  }
}
