import { ContactDetails } from "../contact-details";
import { ContactDetailsId } from "../contact-details-id";

export interface IContactDetailsRepository {
  findById(contactDetailsId: ContactDetailsId): Promise<ContactDetails | null>;
  /*
  findAll(): Promise<ContactDetails[]>;
  create(ContactDetails: ContactDetails): Promise<void>;
  update(ContactDetails: ContactDetails): Promise<void>;
  delete(ContactDetails: ContactDetails): Promise<void>;
 */
}
