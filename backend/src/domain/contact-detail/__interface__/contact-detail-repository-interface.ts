import { ContactDetail } from '../contact-detail'
import { ContactDetailId } from '../contact-detail-id'

export interface IContactDetailRepository {
  findById(contactDetailsId: ContactDetailId): Promise<ContactDetail | null>;
  /*
  findAll(): Promise<ContactDetail[]>;
  create(ContactDetail: ContactDetail): Promise<void>;
  update(ContactDetail: ContactDetail): Promise<void>;
  delete(ContactDetail: ContactDetail): Promise<void>;
 */
}
