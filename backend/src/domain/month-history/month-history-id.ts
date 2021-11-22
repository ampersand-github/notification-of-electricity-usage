import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class MonthHistoryId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'HistoryId')
  }

  public static create (): MonthHistoryId {
    return new MonthHistoryId(uuid())
  }

  public static restore (id: string): MonthHistoryId {
    return new MonthHistoryId(id)
  }
}
