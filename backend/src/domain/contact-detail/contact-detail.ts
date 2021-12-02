import { AggregateRoot } from '../__shared__/aggregate-root'
import { ContactDetailId } from './contact-detail-id'
import { IContactDetailDomain } from './__interface__/contact-detail-domain-interface'

export class ContactDetail extends AggregateRoot<
  IContactDetailDomain,
  ContactDetailId
> {
  public static create (props: IContactDetailDomain): ContactDetail {
    return new ContactDetail(props, ContactDetailId.create())
  }

  public static restore (
    props: IContactDetailDomain,
    id: ContactDetailId
  ): ContactDetail {
    return new ContactDetail(props, id)
  }

  public get name (): IContactDetailDomain['name'] {
    return this.props.name
  }
}
