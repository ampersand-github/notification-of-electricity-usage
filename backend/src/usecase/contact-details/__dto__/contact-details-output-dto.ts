import { ContactDetails } from 'src/domain/contact-details/contact-details'

export class ContactDetailsOutputDto {
  public readonly name: string;
  public constructor (contactDetails: ContactDetails) {
    this.name = contactDetails.name
  }
}
