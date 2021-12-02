import { ContactDetail } from 'src/domain/contact-detail/contact-detail'
import { IContactDetailRepository } from 'src/domain/contact-detail/__interface__/contact-detail-repository-interface'
import { ContactDetailId } from '../../domain/contact-detail/contact-detail-id'
import { ContactDetailsOutputDto } from './__dto__/contact-details-output-dto'

export class ContactDetailsFindByIdUsecase {
  public constructor (readonly repository: IContactDetailRepository) {}

  public async do (id: string): Promise<ContactDetailsOutputDto> {
    const contactDetails: ContactDetail = await this.repository.findById(
      ContactDetailId.restore(id)
    )
    return new ContactDetailsOutputDto(contactDetails)
  }
}
