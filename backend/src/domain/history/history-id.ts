import { v4 as uuid } from 'uuid';
import { UniqueEntityId } from '../__shared__/unique-entity-id';

export class HistoryId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, 'HistoryId');
  }

  public static create(): HistoryId {
    return new HistoryId(uuid());
  }

  public static restore(id: string): HistoryId {
    return new HistoryId(id);
  }
}
