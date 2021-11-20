import { ContactDetails } from "../contact-details";
import { ContactDetailsId } from "../contact-details-id";
import { IContactDetailsDomain } from "../__interface__/contact-details-domain-interface";

const InstrumentProps: IContactDetailsDomain = {
  name: '名前',
};

describe('Instrument', () => {
  it('createできる', () => {
    expect(ContactDetails.create(InstrumentProps)).toEqual(expect.any(ContactDetails));
  });

  it('restoreできる', () => {
    const contactDetailsId: ContactDetailsId = ContactDetailsId.restore('test-id');
    expect(ContactDetails.restore(InstrumentProps, contactDetailsId)).toEqual(
      expect.any(ContactDetails),
    );
    expect(
      ContactDetails.restore(InstrumentProps, contactDetailsId).id.equals(contactDetailsId),
    ).toBe(true);
  });
});
