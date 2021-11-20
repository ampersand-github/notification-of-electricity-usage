import { v4 as uuid } from 'uuid';
import { UniqueEntityId } from '../__shared__/unique-entity-id';

export class MeterReaderId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, 'MeterReaderId');
  }

  public static create(): MeterReaderId {
    return new MeterReaderId(uuid());
  }

  public static restore(id: string): MeterReaderId {
    return new MeterReaderId(id);
  }
}
