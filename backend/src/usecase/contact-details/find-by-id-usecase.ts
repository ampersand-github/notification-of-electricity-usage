import { ContactDetails } from 'src/domain/contact-details/contact-details'
import { IContactDetailsRepository } from 'src/domain/contact-details/__interface__/contact-details-repository-interface'
import { ContactDetailsId } from '../../domain/contact-details/contact-details-id'
import { ContactDetailsOutputDto } from './__dto__/contact-details-output-dto'

export class FindByIdUsecase {
  public constructor (readonly repository: IContactDetailsRepository) {}

  public async do (id: string): Promise<ContactDetailsOutputDto> {
    const contactDetails: ContactDetails = await this.repository.findById(ContactDetailsId.restore(id))
    return new ContactDetailsOutputDto(contactDetails)
  }
}
