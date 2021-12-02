import { ContactDetail } from 'src/domain/contact-detail/contact-detail'

export class ContactDetailsOutputDto {
  public readonly name: string;
  public constructor (contactDetails: ContactDetail) {
    this.name = contactDetails.name
  }
}
