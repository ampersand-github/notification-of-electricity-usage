import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class AreaId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'AreaId')
  }

  public static create (): AreaId {
    return new AreaId(uuid())
  }

  public static restore (id: string): AreaId {
    return new AreaId(id)
  }
}
