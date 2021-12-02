import { ContactDetailId } from '../contact-details-id'

describe('ContactDetailsId', () => {
  it('createできる', () => {
    expect(ContactDetailId.create()).toEqual(expect.any(ContactDetailId))
  })

  it('restoreできる', () => {
    expect(ContactDetailId.restore('test-id')).toEqual(
      expect.any(ContactDetailId)
    )
  })

  it('toStringできる', () => {
    expect(ContactDetailId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      ContactDetailId.restore('test-id').equals(
        ContactDetailId.restore('test-id')
      )
    ).toBe(true)
    expect(
      ContactDetailId.restore('test-id').equals(
        ContactDetailId.restore('not-equal-id')
      )
    ).toBe(false)
  })
})
