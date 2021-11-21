import { AggregateRoot } from '../__shared__/aggregate-root'
import { ContactDetailsId } from './contact-details-id'
import { IContactDetailsDomain } from './__interface__/contact-details-domain-interface'

export class ContactDetails extends AggregateRoot<IContactDetailsDomain, ContactDetailsId> {
  public static create (props: IContactDetailsDomain): ContactDetails {
    return new ContactDetails(props, ContactDetailsId.create())
  }

  public static restore (props: IContactDetailsDomain, id: ContactDetailsId): ContactDetails {
    return new ContactDetails(props, id)
  }

  public get name (): IContactDetailsDomain['name'] {
    return this.props.name
  }
}
