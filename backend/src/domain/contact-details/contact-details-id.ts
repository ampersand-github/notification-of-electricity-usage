import { v4 as uuid } from 'uuid';
import { UniqueEntityId } from '../__shared__/unique-entity-id';

export class ContactDetailsId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, 'ContactDetailsId');
  }

  public static create(): ContactDetailsId {
    return new ContactDetailsId(uuid());
  }

  public static restore(id: string): ContactDetailsId {
    return new ContactDetailsId(id);
  }
}
